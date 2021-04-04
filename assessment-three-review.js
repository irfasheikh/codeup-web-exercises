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


