function searchVowels(string){
    var vowelsArray = [];
    var frequency = {};
    for ( i = 0 ; i <= (string.length -1); i++){
        var vowels = string[i];
        if (frequency[vowels]){
            frequency[vowels]++;
        } else {
            frequency[vowels]=1;
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
        for (j=1; j <= vowelsArray.length; j++){
            if (vowelsArray[0] == vowelsArray[j]){
                vowelsArray.shift();
            }  
        }
    } 
    console.log ("Vowels :" + vowelsArray );
}
