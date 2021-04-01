//one parameter, its taking in an array

function totalPets (petsArray){
    //for loop

    var sum = 0;

    for (var i = 0; i < petsArray.length; i++){
        sum + petsArray[i].numPets;// this is the place we are storing the cmuluative numPets, how do i gget them to summin?
        console.log(sum)
    }
    return sum;
}