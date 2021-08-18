function findMaximum (num1,num2,num3){
    var max=0;
    if (num1 >= num2 ){
        max = num1;
    } else {
        max = num2;
    }if (max >= num3){
        return max;
    } else{
        return num3;
    }
}
function findMaximum(...num){
    var max = 0;
    for ( i=0; i <= num.length; i ++) {
        if (num[i] >= max) {
            max = num [i];
        }
    }
    return max;
}