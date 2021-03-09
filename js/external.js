"use strict"

/* console.log("Hello from external JavaScript")

//color prompt//
alert("Welcome to my Website!")

var favoriteColor=prompt("What is your favorite color?")

alert("Wow, " + favoriteColor + " is my favorite color too!")

//exercise 3//

//movies//
var merm=prompt("How many days did you rent Little Mermaid for?")
alert("You rented Little Mermaid for " + merm +" days.")

var bb=prompt("How many days did you rent Brother Bear for?")
alert("You rented Brother Bear for " + bb + " days.")

var herc=prompt("How many days did you rent Hercules for?")
alert("You rented Hercules for "+ herc + " days.")



alert("Your total price for movie rentals is $" + ((merm*3) + (bb*3) + (herc*3)))

//Google, Amazon, Facebook//

var GoogleRate=prompt("How much does Google pay you?")
var GoogleHours=prompt("How many hours did you work for Google?")
var GooglePay= (GoogleRate) * (GoogleHours)
alert("This is how much money you made at Google:$" + GooglePay)

var AmazonRate=prompt("How much does Amazon pay you?")
var AmazonHours=prompt("How many hours did you work for Amazon?")
var AmazonPay= (AmazonRate) * (AmazonHours)
alert("This is how much money you made at Amazon:$" + AmazonPay)

var FBRate=prompt("How much does Facebook pay you?")
var FBHours=prompt("How many hours did you work for Facebook?")
var FBPay = (FBRate) * (FBHours)
alert("This is how much money you made at Facebook: $" + FBPay)

//class schedule//

var ClassSize = confirm("Are there any spaces open in the class?")

var ClassConflict = confirm("There are no schedule conflicts.")

alert("Are you able to enrool? " + (ClassSize && ClassConflict))

//shopping//

var product = confirm("Are you buying more than two items?")
var offer = confirm("Is the offer still valid?")
var premium = confirm("Are you a premium member?")
var canUserUseOffer = (product || premium) && offer

alert("You can use this offer is a " + canUserUseOffer + " statement."


 */
 walkthrough
// console.log("Hello from external JavaScript");
//
// // here we can use the alert function to give the user a winder on top of their browser
// alert("Welcome to my Website!");
//
// // here we prompt the user for a string with the prompt function
// var UsersFavoriteColor = prompt("What is your favorite color?");
//
// // we can concatenate stings withe the user input to make a dynamic message
// alert("Great, " + UsersFavoriteColor + " is my favorite color too!!");
//
// //we can use the parseInt function to convert a string to a int (or also called a number)
// var littleMermaid = parseInt(prompt("How many days have you had the Little Mermaid?"));
//
// var brotherBear = parseInt(prompt("How many days have you had Brother Bear?"));
//
// var hercules = parseInt(prompt("How many days have you had Hercules?"));
//
// // we can add all the values the user has given to see a total of how much is owed
// var totalOwed = (littleMermaid + brotherBear + hercules) * 3;
//
// alert("You owe BlockBuster $" + totalOwed);
//
// var hoursWorkedForGoogle = Number(prompt("How many hours did you work for Google?"));
//
// var hoursWorkedForAmazon = Number(prompt("How many hours did you work for Amazon?"));
//
// var hoursWorkedForFacebook = Number(prompt("How many hours did you work for Facebook?"));
//
// var totalFromGoogle = hoursWorkedForGoogle * 400;
//
// var totalFromAmazon = hoursWorkedForAmazon * 380;
//
// var totalFromFacebook = hoursWorkedForFacebook * 350;
//
// alert("You have made a total of $" + (totalFromGoogle + totalFromAmazon + totalFromFacebook) + " this week!");
//
// var classIsFull = confirm("Is the class you are trying to join full?");
//
// var hasScheduleConflicts = confirm("Do you have a class at 2:30 already?");
//
// alert("You can join the class is a " + (!classIsFull && !hasScheduleConflicts) + " statement.");

var isOfferValid = confirm("Is the offer still valid?");

var hasMoreThanTwoItems = parseInt(prompt("How many items do you have in your cart?")) >= 2;

var isPremiumMember = confirm("Are you a premium member?");

var canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;

alert("You can use this offer is a " + canUserUseOffer + " statement.");

// You can also do this

// var hasEnoughItems = hasMoreThanTwoItems || isPremiumMember;
//
// var canUserUseOffer = hasEnoughItems && isOfferValid;

