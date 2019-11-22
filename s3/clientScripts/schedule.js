var Schedule = {};

/**
 * dayOfWeekDivOffsets keeps track of the total heights of the classTime divs in each column.
 */
Schedule.dayOfWeekDivOffsets = {
    "monday": 0,
    "tuesday": 0,
    "wednesday": 0,
    "thursday": 0,
    "friday": 0
};

/**
 * init initializes the Schedule div.
 */
Schedule.init = () => {
    // Create column divs.
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for(var i = 0; i < 5; i++) {
        $('.schedule').append(
            `<div class="scheduleColumn text-center ${daysOfWeek[i].toLowerCase()}">
                <h6>${daysOfWeek[i].substring(0,3)}.</h6>
            </div>`
        );
    }

    // Create row divs.
    for(var i = 8; i < 18; i++) {
        let displayNum = i;
        if(i > 12) {
            displayNum -= 12;
        }
        $('.schedule').append(
            `<div class="scheduleRow">
                <div class="scheduleNum">
                    ${displayNum}
                </div>
            </div>`
        );
    }
}

/**
 * setSchedule adds classTime objects to the Schedule.
 * @param divId : the ID of the schedule div to add the schedule to.
 * @param schedule : A list of classTime objects.
 */
Schedule.setSchedule = (divId, schedule) => {
    Schedule.resetSchedule(divId);
    
    for(var classTime of schedule) {
        Schedule.addClassTime(divId, classTime);
    }
};

/**
 * addClassTime adds a classTime to the Schedule.
 * @param divId : the ID of the schedule div to add the classTime to.
 * @param classTime : A classTime object.
 */
Schedule.addClassTime = (divId, classTime) => {
    const weekdayCharacters = {
        "M": "monday",
        "T": "tuesday",
        "W": "wednesday",
        "R": "thursday",
        "F": "friday",
        "S": "saturday",
        "U": "sunday"
    };

    // GetHashColor returns an rgba() code based on the course name + title. 
    function getHashColor(title) {
        var hash = 0;
        if (title.length === 0) return hash;
        for (var i = 0; i < title.length; i++) {
            hash = title.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash;
        }

        var rgb = [0, 0, 0];

        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 255;
            rgb[i] = value;
        }
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.5)`;
    }

    classTime.color = getHashColor(`${classTime.course.name} ${classTime.course.title}`);

    Schedule.addBox(
        divId,
        classTime,
        weekdayCharacters[classTime.day]
    );
};

/**
 * addBox adds a box representing a classTime to the Schedule on a particular day of the week.
 * @param divId : the ID of the schedule div to add the box to.
 * @param classTime : a classTime object.
 * @param dayOfWeek : a string representing the day of the week in lowercase.
 */
Schedule.addBox = (divId, classTime, dayOfWeek) => {
    // 1 px = 1 min.
    let height = Time.getTimeDelta(classTime.startTime, classTime.endTime);

    /* Here's a rundown of the vertical offset calculation:
     *
     * Schedule starts at 8:00, so we subtract the starting hour (8) and multiply it by 60 
     * to get the number of hours in minutes. 
     * 
     * Then, we add the number of minutes from startTime.
     * 
     * Due to dumb CSS reasons, we have to keep track of the height of the divs in the 
     * current column to not screw up the height. We subtract the total heights of divs 
     * in the current column from the vertical offset.
     * 
     * Finally, we add 3 so that a class that starts at, say, 8:00 will start exactly
     * on the line corresponding to 8:00.
     */
    let verticalOffset = (Time.getHour(classTime.startTime) - 8) * 60
                       + Time.getMins(classTime.startTime)
                       - Schedule.dayOfWeekDivOffsets[dayOfWeek];

    // We then update dayOfWeekDivOffsets with the current height.
    Schedule.dayOfWeekDivOffsets[dayOfWeek] += height;

    $(`${divId} .scheduleColumn.${dayOfWeek}`).append(
        $(`<div class="scheduleClassTime ${classTime.course.name.replace(' ', '-')}"
                style="top:${verticalOffset}px;
                       height:${height}px;
                       background:${classTime.color};">
            <b>${classTime.course.name}-${classTime.sectionNum}</b>
            <p>${Time.getPrintTime(classTime.startTime)}-${Time.getPrintTime(classTime.endTime)}</p>
        </div>`).bind('click', function() {
            Schedule.openClassModal(classTime);
        })
    );

    let classTimeSelector = `${divId} .scheduleClassTime.${classTime.course.name.replace(' ', '-')}`;

    $(classTimeSelector).hover(function() {
        $(classTimeSelector).addClass('shadow');
    }, function() {
        $(classTimeSelector).removeClass('shadow');
    });
};

/**
 * resetSchedule removes all the classTime divs from the Schedule.
 * @param divId : the ID of the schedule div to reset.
 */
Schedule.resetSchedule = (divId) => {
    $(`${divId} .scheduleClassTime`).remove();
    Schedule.dayOfWeekDivOffsets = {
        "monday": 0,
        "tuesday": 0,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0
    };
}

/**
 * openClassModal replaces the text within a modal with the correct information and opens it.
 * @param classTime : a classTime object.
 */
Schedule.openClassModal = (classTime) => {
    $('.modal-title').text(`${classTime.course.name}-${classTime.sectionNum} ${classTime.course.title}`);
    $('.modal-body').html(`
    <ul>
        <li>Professor: ${classTime.professor}</li>
        <li>Location: ${classTime.location.building} ${classTime.location.room}</li>
        <li>Enrollment: ${classTime.enrollment.total}</li>
        <li>CRN: ${classTime.crn}</li>
    <ul>
    `);
    $('#classModal').modal();
}