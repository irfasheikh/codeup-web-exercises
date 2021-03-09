/* (function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

 /* planetsArray = planetsString.split("|") // this what its looking for to split, where the element ends, how am i ging to separate into an array


    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? if we put this straight into the body into html it makes a list of planets
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


/*var planetsBr = planetsArray.join("<br>")
console.log(planetsBr)


    //bonus
    var ulPlanets = "<ul><li>"planetsArray.join("</li><li>") + "</li></ul"

console.log(ulPlanets)




})();

 */

//walkthrough//
(function(){
    "use strict";

    var planetsString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split(",");

    console.log(planetsArray);

    var brPlanets = planetsArray.join('<br>');

    console.log(brPlanets);

    var ulPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    console.log(ulPlanets);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();

