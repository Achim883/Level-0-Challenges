function convertNumberToTime(num) {
    var hours = 0;
    var minutes = 0;
    minutes = num % 60;
    hours = (num - minutes) / 60;
    if ( num < 0){
        return "0 hours, 0 minutes. ";
    }else {
        if (minutes == 0 || minutes > 1) {
            if (hours < 1  || hours > 1){
                return hours + " hours, " + minutes + " minutes.";
            } else {
                return hours + " hour, " + minutes + " minutes.";
            }
        }else {
            if (hours == 1){
                return hours + " hour, " + minutes + " minute.";
            } else {
                return hours + " hours, " + minutes + " minute.";
            }
        } 
    }
}
