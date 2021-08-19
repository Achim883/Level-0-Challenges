function findMaximum(...num){
    var max = 0;
    for ( i=0; i <= num.length; i ++) {
        if (num[i] >= max) {
            max = num [i];
        }
    }
    return max;
}
