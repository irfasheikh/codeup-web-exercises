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

var waitingForToy = confirm("Are we still waiting for this toy?")

while(waitingForToy) //is it true i'm still waiting for the toy? and it's false that we're waiting for the toy
{
    waitingForToy = confirm("How about now?")
}

if(!waitingForToy) //until true, we'll never get down
{
  alert("Thanks! You da best!")
}


//create WHILE loop that runs while x <10
var x = 0

while (x < 10)
{
    x++;
    console.log(x)
}