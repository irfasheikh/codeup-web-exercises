// Are we there yet?

//var areWeThereYet; //iniitlize variable

//while(!areWeThereYet) // this condition runs our while loop, when you click cancel, its false and will keep diong it. when you click
//ok it will stop and go away
//{
  //  areWeThereYet = confirm("Are we there yet?") //going to be true or false written as ok or cancel
//}

/* var haveToy = confirm("Can I have the toy please?") // it will be stuck until you click ok *true* persistent kid

while(!haveToy)
{
    haveToy = confirm("Please?")
}

if(haveToy)
{
    alert("Thanks! You're the best, can't wait to go outside!")
}


 */

/*var waitingForToy = confirm("Are we still waiting for this toy?")

while(waitingForToy) //is it true i'm still waiting for the toy? and it's false that we're waiting for the toy
{
    waitingForToy = confirm("How about now?")
}

if(!waitingForToy) //until true, we'll never get down
{
  alert("Thanks! You da best!")
}


//create WHILE loop that runs while x <10
/*var x = 0

while (x < 10)
{
    x++;
    console.log(x)
}

var weatherIsMessy = true;
 while(weatherIsMessy)
 { //if true >>> do some stuff
     alert("Well, let's have some hot chocolate!")
 weatherIsMessy = confirm("Is it still messy outside?")
 }

 alert("Excellent- let's all go outside!")

//console.log("Hello, I'm down here! " + x); // results of above

/*function incrementUntilTen(num)
{
    while (num < 10) {
        num = num + 1;
        console.log(num)
    }
    return console.log("Wrapped up counting!")
}

incrementUntilTen(num: 1)

 */

/*function incrementUntilTen(num)
{
    var counter = 0;
    while (num <= 10) {

        console.log(num)
        num = num + 1;

        counter = counter +1
        //console.log(num)
    }
    return console.log("Wrapped up counting! The loo ran " + counter + " times.")
}

incrementUntilTen(num: 1)


// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once.
//do this thing for sure this first time...then check the continue vs check condition will i do this thing at all?

//do {
//code my do-while loop will run AT LEAST ONCE
//} while (condition to check to proceed)

//while(false){
// console.log("Will you ever see me?")
//}

do {
    console.log("Will you see me in the world of the do-while loop_")
} while (false)

 */

/* function doWhileMultiplyByTwoUntilGreaterThan100(num)
{ do {
    num = num * 2;
    console.log(num);
} while (num < 100)

}

doWhileMultiplyByTwoUntilGreaterThan100(num:2)
function whileLoopMultipleByTwoUntilGreaterThan100(num){
    while (num < 100){
        num = num * 2;
        console.log(num);
    }
}

 */

function sayHelloXTimes(num)
{
    for (num; num >=0; num--){
        if (num % 5 === 0) {
            console.log("Howdy! Currently num is: " + num);
        } else {
            console.log("Hello!");
        }
    }
    //say "Hello!"
}

sayHelloXTimes(num:25)