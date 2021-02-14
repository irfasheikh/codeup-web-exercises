"use strict";

function showMultiplicationTable() {
    for (var i = 1; i <= 10; i++) {
        var result = i * 7;
        console.log("7 * " + i + " = " + result);
    }
}

showMultiplicationTable();


//3.

for (var i = 1; i<= 10; i++){  // create for loop, giving out console.log
    var random = Math.floor(Math.random() * 181 * 20)
    if(random % 2 === 0){
        console.log(random + " is even.")
    } else {
        console.log(random + " is odd.")
    }
}

//4.
//i <10, i=10,

for (var outerLoop = 1; outerLoop <= 9; outerLoop++ ){

    var output = "";

    for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){    // innerloop <=  is the condition so this controls if the loop runs
        output = output + outerLoop.toString(); //we concat to the string rep of the outerloop--depends on outerloop, we want however high eqqually widem 9 down, 9 concat characters , the innerloop is sayig , case is innerloop <= ourerloop , finished loops go back and go to 2 so is 2 <= 1 bc it fails, outerloop ++ means outerloop = 2 now, so is outerlop <= 9 run again restate output bc comp doesnt know its done it before resets so test it agian so empty string
    }
    console.log(output); // the outerloop is console.logged
}

//we only want it to run for how many times we are on the outerloop bs we say innerloop <= outerloop AKA run until we are to the equal amounf of the outerloop

/*
1
22
333
4444
555555 <- these are all differnt iterations
 */

//5.
for (var i = 100; i >= 5; i=i- 5){
    console.log(i)
}