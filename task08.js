function convertNumberToTime(num) {
    var hours = 0;
    var minutes = 0;
    minutes = num % 60;
    hours = (num - minutes) / 60;
    if (minutes > 1 & hours > 1) {
        return hours + " hours, " + minutes + " minutes.";
    } else if (minutes > 1 & hours < 2) {
        return hours + " hour, " + minutes + " minutes.";
    } else  if ( hours > 1 & minutes < 2){
        return hours + " hours, " + minutes + " minute.";
    }else {
        return hours + " hours, " + minutes + " minutes.";
    }
}