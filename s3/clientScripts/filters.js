/**
 * Filters the schedules by the selected days
 */
function filterByDay() {
    var schedules = JSON.parse(sessionStorage.getItem('schedules'));
    var schedulesFilteredByTime = JSON.parse(sessionStorage.getItem('schedulesFilteredByTime'));
    var selectedDays = [];

    //Get the selected days to be filter by (eg. MWF)
    var previouslySelectedDays = document.getElementsByClassName("day-picker");
    for (let i = 0; i < previouslySelectedDays.length; i++) {
        if (previouslySelectedDays[i].classList.contains('active')) {
            selectedDays.push(previouslySelectedDays[i].innerHTML);
        }
    }

    //Removes the schedules that do not follow the filter rules
    if(selectedDays.length > 0) {
        for(var i = 0; i < schedules.length; i++) {
            for (var j = 0; j < schedules[i].length; j++) {
                if (selectedDays.indexOf((schedules[i][j].day)) == -1) {
                    schedules.splice(i, 1);
                    i -= 1;
                    break;
                }
            } 
        }
    }
    sessionStorage.setItem('schedulesFilteredByDay', JSON.stringify(schedules));

    //Get the schedules that are common in the the schedules filtered by day and time
    var results = [];
    for (var i = 0; i < schedules.length; i++) {
        if (JSON.stringify(schedulesFilteredByTime).includes(JSON.stringify(schedules[i]))) {
            results.push(schedules[i]);
        }
    }

    addSchedules(results);
    if(results.length > 0) {
        Schedule.setSchedule('#schedule-div', results[0]); 
    } else {
        Schedule.setSchedule('#schedule-div');
    }
}


/**
 * Filters by the selected time frames
 */
function filterByTime() {
    var schedules = JSON.parse(sessionStorage.getItem('schedules'));
    var schedulesFilteredByDay = JSON.parse(sessionStorage.getItem('schedulesFilteredByDay'));

    var startTimeFilter = 0;
    var endTimeFilter = 2399;
    
    //Gets the time filter values
    var previouslySelectedTimes = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < previouslySelectedTimes.length; i++) {
        if (previouslySelectedTimes[i].classList.contains('active')) {
            if(previouslySelectedTimes[i].parentNode.id == "startDropdown") {
                startTimeFilter = Number(previouslySelectedTimes[i].getAttribute("href").toString().substr(1));

            } else if(previouslySelectedTimes[i].parentNode.id == "endDropdown") {
                endTimeFilter = Number(previouslySelectedTimes[i].getAttribute("href").toString().substr(1));
            }
        }
    }

    //Removes the schedules that do not follow the filter rules
    for (var i = 0; i < schedules.length; i++) {
        for (var j = 0; j < schedules[i].length; j++) {
            if ((schedules[i][j].startTime < startTimeFilter) || (schedules[i][j].endTime > endTimeFilter)) {
                schedules.splice(i, 1);
                i -= 1;
                break;
            }
        }
    }

    sessionStorage.setItem('schedulesFilteredByTime', JSON.stringify(schedules));

    //Get the schedules that are common in the the schedules filtered by day and time
    var results = [];
    for (var i = 0; i < schedules.length; i++) {
        if (JSON.stringify(schedulesFilteredByDay).includes(JSON.stringify(schedules[i]))) {
            results.push(schedules[i]);
        }
    }

    console.log("Filtered by day length: " + schedulesFilteredByDay.length);
    console.log("Filtered by time length: " + schedules.length);
    console.log("Results: " + results.length);

    addSchedules(results);
    if(results.length > 0) {
        Schedule.setSchedule('#schedule-div', results[0]); 
    } else {
        Schedule.setSchedule('#schedule-div');
    }
    
}
