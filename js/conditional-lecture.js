console.log("It's time for some conditionals!!");

var myAge = 10;

var requiredAge = 13;

//This is an if Statement
//if (myAge >= requiredAge) {
  //  console.log("You can make a social media account!");
//}

//This is an if/else statement

//if(myAge >= requiredAge){
  //  console.log("You can make a social media account!")
//} else {
  //  console.log("You are not old enough to make an account!")
//}

//var monthsSinceOilChange = 10;

//var minimumNumberOfMonthsForOilChange = 6;

//if(monthsSinceOilChange < minimumNumberOfMonthsForOilChange) {
  //  console.log("You don't need an oil change, you got one " +monthsSinceOilChange + " months ago")
//} else {
  //  console.log("Hey, if you like your engine, you should get an oil change.");
//}

var favoriteColor = "blue"
var secondFavColor = "cyan"

//if(secondFavColor === "blue"){
   // console.log("We have all the favorite colors in common!")
//} else if (favoriteColor === "blue"){
   // console.log("We only have the favorite color red in common. ")
//}else{
   // console.log("We don't have the same favorite colors :(")
//}

favoriteColor = "blue"

switch (favoriteColor){
    case "purple" :
        console.log("Hey my favorite color is purple too!");
        break;
    case "blue" :
        console.log("Hey my favorite color is blue too!");
        break;
    case "green" :
        console.log("Hey my favorite color is green too!");
        break;
    case "cyan" :
        console.log("Hey my favorite color is cyan too!");
        break;
}