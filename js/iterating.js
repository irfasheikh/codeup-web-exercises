
   /* (function(){
        "use strict";

        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */

   /*     var names = ["Iffy", "Emmanuel", "Uroosa", "Billu"];


        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */


  /*      console.log(names.length)

        /**
         * TODO:
         * Create log statements that will print each of the names individually by
         * accessing each element's index.
         */

    /*    console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3])



        /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */
      /*  for (var i =0; i<names.length; i++) {
            console.log(names[i])
        }



        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */
   /*
console.log("This is a for each loop")
        names.forEach(function(aName){
                console.log(aName);
            }
        );





        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it
         * - first: returns the first item in the array
         * - second: returns the second item in the array
         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5
         */

       /* function First(array){
            return array[0]}

            console.log(First(names))

        function second(array){
            return array[1]
        }
        console.log(second(names))

        function last(array) {
            return array[array.length-1]
        }

        console.log(last(names))






        })();

        */


   //walkthrough//
   (function (){
       "use strict";
       var car = "Honda Civic";
       console.log(car);

       /**
        * TODO:
        * Create a function called 'sayHello' that takes a parameter 'name'.
        * When called, the function should return a message that says hello to the passed in name.
        *
        * Example
        * > sayHello("codeup") // returns "Hello, codeup!"
        */

       function sayHello(name){
           return "Hello, " + name + "!";
       }

       console.log(sayHello());

       console.log(sayHello("codeup"));

       /**
        * TODO:
        * Call the function 'sayHello' and pass your name as a string argument.
        * Store the result of the function call in a variable named 'helloMessage'.
        *
        * console.log 'helloMessage' to check your work
        */

       var helloMessage = sayHello("Samuel");

       console.log(helloMessage);
       /**
        * TODO:
        * Store your name as a string in a variable named 'myName', and pass that
        * variable to the 'sayHello' function. You should see the same output in the
        * console.
        */

       var myName = "Samuel";

       console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
       var random = Math.floor((Math.random() * 3) + 1);

       console.log("Your random number is " + random);


       /**
        * TODO:
        * Create a function called 'isTwo' that takes a number as a parameter.
        * The function should return a boolean value based on whether or not the passed
        * number is the number 2.
        *
        *
        * Example
        * > isTwo(1) // returns false
        * > isTwo(2) // returns true
        * > isTwo(3) // returns false
        *
        * Call the function 'isTwo' passing the variable 'random' as a argument.
        *
        * console.log *outside of the function* to check your work (you should see a
        * different result everytime you refresh the page if you are using the random
        * number)
        **/

       function isTwo(number){
           return 2 === number;
       }

       console.log(isTwo(random));

       /**
        * TODO:
        * Create a function named 'calculateTip' to calculate a tip on a bill at a
        * restaurant. The function should accept a tip percentage and the total of the
        * bill, and return the amount to tip
        *
        * Examples:
        * > calculateTip(xz, 20) // returns 4
        * > calculateTip(0.25, 25.50) // returns 6.375
        * > calculateTip(0.15, 33.42) // returns 5.013
        */

       function calculateTip(tipPercentage,billTotal){
           var tip = billTotal * tipPercentage;
           return tip.toFixed(2);

           // return billTotal * tipPercentage;
       }

       /**
        * TODO:
        * Use prompt and alert in combination with your calculateTip function to
        * prompt the user for the bill total and a percentage they would like to tip,
        * then display the dollar amount they should tip
        */

       var billTotal = Number(prompt("How much was your bill?"));

       var tipPercent = Number(prompt("What percentage would you like to tip?"));


// console.log(Number("3.25234523").toFixed(2));

       var calculatedTip = calculateTip(tipPercent,billTotal)

       var tipMessage = "You would tip $" + calculatedTip;

       alert(tipMessage);

       /**
        * TODO:
        * Create a function named `applyDiscount`. This function should accept a price
        * (before a discount is applied), and a discount percentage (a number between 0
        * and 1). It should return the result of applying the discount to the original
        * price.
        *
        * Example:
        * > var originalPrice = 100;
        * > var dicountPercent = .2; // 20%
        * > applyDiscount(originalPrice, dicountPercent) // 80
        *
        * > applyDiscount(45.99, 0.12) // 40.4712
        */

       function applyDiscount(price,discountPercent){
           var discountedPrice = price - (price * discountPercent);
           return discountedPrice.toFixed(2)
       }

       console.log(applyDiscount(30.78,0.2));

   })();
