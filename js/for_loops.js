"use strict";

function showMultiplicationTable() {
    for (var i = 1; i <= 10; i++) {
        var result = i * 7;
        console.log("7 * " + i + " = " + result);
    }
}

showMultiplicationTable();


//3.
for (var i = 1; i<= 10; i++){
    var random = Math.floor(Math.random() * 181 * 20)
    if(random % 2 === 0){
        console.log(random + " is even.")
    } else {
        console.log(random + " is odd.")
    }
}

