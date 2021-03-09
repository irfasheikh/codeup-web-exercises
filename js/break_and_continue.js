//1.
//for (var i=1; i<= 50; i % 2 =1){

  //  var skipNumber = Number(prompt("Enter an odd number between 1 and 50."))

    //if(i >= 1 && i <= 50 && i % 2 !== 0){
    //break;
    //}
//}

/* var usersNumber = prompt("Give me an odd number between 1 and 50");

//while (usersNumber % 2 ==0 && userNumber > 1 && usersNumber <50 ) // if user number is even and not between 1 and 50 its long so breakup to fxn


function isNumberInRange(num){
    return num >= 1 && num <=50;
}
function isNumberEven(num){
    return num % 2 ===0;
}


while (true) {
    if (!isNumberEven(usersNumber) && isNumberInRange(usersNumber)) {
        break;
    }

    usersNumber = prompt("Give me an odd number between 1 and 50");

}


console.log("Number to skip is: " + usersNumber);

for (var i = 1; i <= 49; i+= 2){
    if (i === usersNumber) {
        console.log("Yikes! Skipping number: " + usersNumber);
    }
    console.log("Here is an odd number: " + i);
}
//break is game over
//continue is restart level

 */

//walkthrough

var usersNumber = Number(prompt("Give me an odd number between 1 and 50"));

function isNumberInRange(num){
    return num >= 1 && num <= 50;
}

function isNumberEven(num){
    return num % 2 === 0;
}

while (true){

    if (!isNumberEven(usersNumber) && isNumberInRange(usersNumber)){
        break;
    }

    usersNumber = Number(prompt("Give me an odd number between 1 and 50"));
}


console.log("Number to skip is: " + usersNumber);

for (var i = 1; i <= 49; i += 2){

    if (i === usersNumber){
        console.log("Yikes! Skipping number: " + usersNumber);
        continue
    }
    console.log("Here is an odd number: " + i);
}
