function findCommonLetters(string1,string2){
    var commonLetters = "";
    for( i = 0; i <= string2.length -2; i++){
        for ( j =  0; j <= string1.length; j++){
            if ( string2[i] == string1[j]) {
                commonLetters = commonLetters +" "+ string2[i] + ",";  
            }
        }
    }
    if (i = string2.length){
        for (j = 0; j <= string1.length; j++){
            if ( string2[i] == string1[j]) {
                commonLetters = commonLetters +" "+ string2[string2.length - 1];
            }
        }
    }
    return "Common Letters:" + commonLetters;
}
findCommonLetters ("house", "computers");