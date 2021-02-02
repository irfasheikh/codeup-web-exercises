"use strict"

console.log("Hello from external JavaScript")

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
var premium = confirm("Are you a premium member?")

alert("Do you qualify for the discount?" + (product || premium));

