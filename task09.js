function searchVowels(string){
    var vowelsArray = [];
    var x = {};
    for ( i = 0 ; i <= (string.length -1); i++){
        var y = string[i];
        if (x[y]){
            x[y]++;
        } else {
            x[y]=1;
            if (string[i] == "a" || string[i] == "A"){
                vowelsArray.push(" a");
            } else if ( string[i] == "e" || string[i] == "E"){
                vowelsArray.push(" e");
            } else if ( string[i] == "i" || string[i] == "I"){
                vowelsArray.push(" i");
            } else if ( string[i] == "o" || string[i] == "O"){
                vowelsArray.push(" o");
            } else if ( string[i] == "u"|| string[i] == "U"){
                vowelsArray.push(" u");
            } 
        } 
    } 
    console.log ("Vowels :" + vowelsArray);
}
