function searchVowels(string){
    var vowels = "";
    for ( i = 0 ; i <= (string.length -2); i++){
        if (string[i] == "a" || string[i] == "A"){
            vowels = vowels + " a,";
        } else if ( string[i] == "e" || string[i] == "E"){
            vowels = vowels + " e,";
        } else if ( string[i] == "i" || string[i] == "I"){
            vowels = vowels + " i,";
        } else if ( string[i] == "o" || string[i] == "O"){
            vowels = vowels + " o,";
        } else if ( string[i] == "u"|| string[i] == "U"){
            vowels = vowels + " u,";
        } 
    } if ( string[string.length -1] == "a" || string[string.length -1] == "A" ||  string[string.length -1] == "e" || string[string.length -1] == "E" || string[string.length -1] == "i" || string[string.length -1] == "I"|| string[string.length -1] == "o" || string[string.length -1] == "O"|| string[string.length -1] == "u" || string[string.length -1] == "U" ){
        vowels = vowels + " " + string[string.length -1];
    }
    return "Vowels :" + vowels;
}