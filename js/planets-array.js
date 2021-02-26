(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */




    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun');

    console.log(planets);






    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto")


    console.log(planets);








    console.log('Removing "The Sun" from the beginning of the planets array.');
    var byeSun = planets.shift("The Sun")


    console.log(planets);



//shift and unshift are for the first thing in the array


    console.log('Removing "Pluto" from the end of the planets array.');

    var byePluto = planets.pop("Pluto")

    console.log(planets);




    console.log('Finding and logging the index of "Earth" in the planets array.');
var index = planets.indexOf("Earth")
    console.log("The index of Earth is " + index);

    console.log("Reversing the order of the planets array.");
    planets.reverse()

    console.log(planets);

    console.log("Sorting the planets array."); //alphabetically sort
planets.sort()

    console.log(planets);
})();