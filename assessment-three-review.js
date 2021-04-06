//one parameter, its taking in an array

function totalPets (petsArray){
    //for loop

    var sum = 0;

    for (var i = 0; i < petsArray.length; i++){
        sum + petsArray[i].numPets;// this is the place we are storing the cumuluative numPets, how do i gget them to summin?
        console.log(sum)
    }
    return sum;
}


/// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
// //     Example object:
//      var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
// // Expected look in console from running printRecipe(caldoRecipe):
// // Caldo con Pollo
// // Serves: 4
// // Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder





// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
// totalPets([{name: 'Fernando Mendoza', numPets: 1},{name: 'Douglas Hirsh', numPets: 8}, {name: 'Kenneth Howell', numPets: 3}]) //11

var petsArray = [{
    name: "Fernando Mendoza",
    numPets: 1
},{
    name: "Douglas Hirsh",
    numPets: 8
},{
    name: "Kenneth Howell",
    numPets: 3
}]


function totalPets (input) {



var sum = 0;

for (var i = 0; i <petsArray.length; i++){
    sum = sum + petsArray[i].numPets;
}
return sum;
}


/*

 */

/*our function:
function totalPets(petsArray){

    var sum = 0;
    for(var i = 0; i < petsArray.length; i++){
        sum = sum + petsArray[i].numPets;
        // console.log("var 'sum' is currently " + sum) //uncomment if you want to track the running total of sum
    }
    return sum;
}



//more drills:
// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.
// countPosi([-2, 7, 4, -9, 1]) //3
// countPosi([3, 6, 9, -1]) //3
// countPosi([10]) //1


 */


function countPosi(numbers) {
    var totalPosNumbers = 0;

    for( var i= 0; i < numbers.length; i++) {
        if (numbers [i] > 0){
            totalPosNumbers = totalPosNumbers + 1;
        }
    }
    return totalPosNumbers;
}

console.log(countPosi ([-2, 7, 4, -9, 1]));



//var countPosi = [-2, 7, 4, -9, 1];

//function countPosi ()



/*function countPositive(nums){
    var totalPosNumbers = 0;
    for(var i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            totalPosNumbers = totalPosNumbers + 1;
        }
    }
    return totalPosNumbers;
}
console.log(countPositive([-2, 7, 4, -9, 1]));








// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
 Example object:



   var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}
Expected look in console from running printRecipe(caldoRecipe):
Caldo con Pollo
Serves: 4
Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder



   */

var biryaniRecipe = {
    title: "Chicken biryani",
    servings: "6",
    ingredients: ["whole chicken", "tomato", "basmati rice", "biryani masala", "lemon juice"]
}

function printRecipe(object){
    console.log(biryaniRecipe.title)
    console.log("Serves" + biryaniRecipe.servings)
    console.log("Required ingredients:" + biryaniRecipe.ingredients)
}

console.log(printRecipe(biryaniRecipe));


// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}
