function someFunctionNoParameters(){
    //inside of here- we tell our function to do some stuff
    return alert("Hello there, Marco!")
}

// someFunctionNoParameters()

function someFunctionWithParameter(name){
    //inside of here- we tell our functin to do some stuff
    return alert("Hello there, "+ name);
}
// var myName= "Irfa";
// someFunctionWithParameter(myName)
//someFunctionWithParameter("Irfa!")

// A function that returns a value >> assign that value to a variable

function increment(num){
    return num + 1;
}
// var result = increment(1)

//var four = increment (3);
//var five = increment(increment(3));
//var six = increment(increment(increment( 3)))

//console.log(four)
//console.log(five)
//console.log(six)

// If I write a new function below: will I be able to pass our increment function inside of it?

function multiplyByTwo(num){
    return num * 2;
}

console.log(multiplyByTwo(increment(3)));

//function honkHorn(){
 //   return "beep beep"
//}

var honkHorn = function(){
    return "anonymous beep beep";
}

console.log(honkHorn());
