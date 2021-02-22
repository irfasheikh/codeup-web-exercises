function showMultiplicationTable(num){
    for ( var i = 1 ; i <= 10; i++){
        //this will run every iteration
        console.log(num + " x "+ " = " + (num * i))
    }
}


console.log(randomNumber)

for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * (181) + 20);
    if (randomNumber % 2 === 0){
        console.log("Your number " + randomNumber + " is even!");
    }else{
        console.log("Your number "+ randomNumber + " is even!");
    }
}

for (var outerLoop = 1; outerLoop <= 9; outerLoop++){
    var output = "";
    for (var innerLoop=1; innerLoop <= outerLoop; innerLoop++){
       output = output + outerLoop;
    }
    console.log(output);
}



//start at 100, go down to 5 and counting by 5.

for (var i = 100; i>= 5; i -=5){
    console.log(i)
}

//while loops//

var number = 2;

while(number <=65536){
    console.log(number);
    number=number*2;

}


var allCones = Math.floor(Math.random() * 50) + 50;
do {
    requestedCones = Math.floor(Math.random() * 5 ) + 1;
    if (requestedCones <= allCones) {
        //this means you can sell the cones.
        allCones = allCones - requestedCones;
        console.log("You sold " + requestedCones +" cones, and have " + allCones + " cones left.")

    }else{
        // this means you dont have enough cones to sell.
        console.log("Sorry I don't have " + requestedCones + " cones, I only have " + allCones + " cones left.")
    }


}while(allCones>0)

console.log("Yahhhh, I sold all my cones for the day!!");