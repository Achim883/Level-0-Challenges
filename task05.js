function getAreaTriangle(side1,side2,side3){
    var area = 0;
    if ( side1 > 0 & side2 > 0 & side3 > 0) {
        var semiperimeter = 0.5 * (side1 + side2 + side3);
        area = Math.sqrt( (semiperimeter * (semiperimeter-side1) * (semiperimeter - side2) * (semiperimeter-side3)));
        return area;
    } else {
        return "Please enter a positve number."
    }
}
getAreaTriangle(3,4,5);