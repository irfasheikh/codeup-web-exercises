(function() {
    "use strict";

    // create a circle object
    //line 5 - 25 is an object being created bc {
    //function inside of an object = method
    var circle = {
        radius: 3,

        getArea: function (rad) {

            // TODO: complete this method
            // hint: area = pi * radius^2
var area = (Math.PI * Math.pow(this.radius, 2));
            return area; // TODO: return the proper value

        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
if (doRounding) {
  var result =  Math.round(this.getArea())
} else {
    result = this.getArea();
}
var result = doRounding ? Math.round(this.getArea()) : this.getArea();
// If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);

//} else { console.log("Area of a circle with radius: " + this.radius + ", is: "+ this.getArea);
        }
    }

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();