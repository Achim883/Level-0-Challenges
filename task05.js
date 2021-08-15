function getAreaTriangle(side1,side2,side3){
    if ( side1 > 0 & side2 > 0 & side3 > 0) {
        var area = 0.5 * (side1 + side2 + side3);
        return area;
    } else {
        return "Please enter a positve number."
    }
}