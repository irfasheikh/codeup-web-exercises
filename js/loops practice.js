1
2
3
4
5


/*for (var i= 1; i <=5; i++){

    if (i % 2 === 1) {
        console.log(i);
    }
}

 */

// make a square using nested loops

****
****
****

for (var x = 1 ; x <=4 ; x++) { // this evaluates to true so itll run this below
    var output = "";


    for (var y = 1 ; y<=3; y++){ //for every outer iteration, there will be 3 outputs-- we declare
        output = output + x;

    }

    console.log(output);
}

function outputRectangle(width, height){

    for (var y =1; y<= height; y++)
}



1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12


var number = 3;

for (var  i = 1 ; i <= 12 ; i++){
    console.log(i + "X" + number + " = " + ( i * number));
}


//I want to print out a list that I can record my workouts on in the gym. I want to do four exercises with
// three sets each, so I’ll need a list that will reflect this.


for ( var exerciseLoop = 1; exerciseLoop <= 4; exerciseLoop++){
    console.log("Exercise " + exerciseLoop + ":");


    for (var setNumber = 1; setNumber <= 3; setNumber++){
        console.log("Set "+ setNumber);
    }
}


//with function

function listSets(NumberofSets) {

    for (var exerciseLoop = 1; exerciseLoop <= 4; exerciseLoop++) {
        console.log("Exercise " + exerciseLoop + ":");


        for (var setNumber = 1; setNumber <= 3; setNumber++) {
            console.log("Set " + setNumber);
        }
    }
}