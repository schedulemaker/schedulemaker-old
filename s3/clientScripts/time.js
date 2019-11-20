var Time = {}

Time.getPrintTime = (time) => {
    let hour = Time.getHour(time);
    let mins = Time.getMins(time);
    let period = 'am';

    if(hour > 12) {
        period = 'pm';
        hour -= 12;
    }

    // Zero-pad minutes if single digit.
    if(mins % 10 === mins) {
        mins = '0' + mins;
    }

    return `${hour}:${mins}${period}`;
}

Time.getHour = (time) => {
    return Math.floor(time / 100);
}

Time.getMins = (time) => {
    return time % 100;
}

// getTimeDelta gets the time between two times in minutes.
Time.getTimeDelta = (start, end) => {
    return (Time.getHour(end) - Time.getHour(start)) * 60 + (Time.getMins(end) - Time.getMins(start)) % 60;
}