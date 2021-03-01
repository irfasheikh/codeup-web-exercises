function timesFour (input){
    if(typeof input === "number")
        return (input * 4)
    else {return false}
}

timesFour(5)
//console.log(timesFour(5))
//console.log(timesFour(l))

function calculateTax(totalPaid, taxPercent){
    if(typeof totalPaid === 'number' && typeof taxPercent ==='number') {
        return "$" + (totalPaid * taxPercent)
    }
}
function isVowel(vowel) {

    vowel = vowel.toLowerCase();

    return vowel== 'a' || vowel=='e'|| vowel=='i'||vowel=='o'||vowel=='u'
}

// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(vowel) {

    vowel = vowel.toLowerCase();

    return vowel== 'a' || vowel=='e'|| vowel=='i'||vowel=='o'||vowel=='u'
}
assert(isVowel("a"), true, "Exercise 43");
assert(isVowel("U"), true, "Exercise 43");
assert(isVowel("banana"), false, "Exercise 43");
assert(isVowel("Q"), false, "Exercise 43");
assert(isVowel("y"), false, "Exercise 43");
addToDone("Exercise 43 is correct.");

// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
function hasVowels(str){

    for(let letter of str)
    {
        if(isVowel(letter))
        {
            return true;
        }
    }

    return false;
}
assert(hasVowels("banana"), true, "Exercise 44");
assert(hasVowels("ubuntu"), true, "Exercise 44");
assert(hasVowels("QQQQ"), false, "Exercise 44");
assert(hasVowels("wyrd"), false, "Exercise 44");
addToDone("Exercise 44 is correct.");

// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
function countVowels(str)
{
    var count = 0;

    for(let letter of str)
    {
        if(isVowel(letter))
            count++;
    }

    return count;

}


assert(countVowels("banana"), 3, "Exercise 45");
assert(countVowels("ubuntu"), 3, "Exercise 45");
assert(countVowels("mango"), 2, "Exercise 45");
assert(countVowels("QQQQ"), 0, "Exercise 45");
assert(countVowels("wyrd"), 0, "Exercise 45");
addToDone("Exercise 45 is correct.");

// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
function removeVowels (str)
{

    var output ="";

    for(let letter of str)

        if(!isVowel(letter))
        {
            output = output.concat(letter);
        }

    return output;

}
assert(removeVowels("banana"), "bnn", "Exercise 46");
assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
assert(removeVowels("mango"), "mng", "Exercise 46");
assert(removeVowels("QQQQ"), "QQQQ", "Exercise 46");
addToDone("Exercise 46 is correct.");

// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
function startsWithVowel (str)
{
    if(str.length ==0)
        return false;

    return isVowel(str.charAt(0));
}

assert(startsWithVowel("ubuntu"), true, "Exercise 47");
assert(startsWithVowel("banana"), false, "Exercise 47");
assert(startsWithVowel("mango"), false, "Exercise 47");
addToDone("Exercise 47 is correct.");

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
function endsWithVowel (str)
{
    if(str.length ==0)
        return false;

    return isVowel(str.charAt(str.length-1));
}
assert(endsWithVowel("ubuntu"), true, "Exercise 48");
assert(endsWithVowel("banana"), true, "Exercise 48");
assert(endsWithVowel("mango"), true, "Exercise 48");
assert(endsWithVowel("spinach"), false, "Exercise 48");
addToDone("Exercise 48 is correct.");

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
function startsAndEndsWithVowel(str)
{
    return startsWithVowel(str) && endsWithVowel(str);
}
assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");
addToDone("Exercise 49 is correct.");

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
function first(sequence)
{
    return sequence[0];

/*if(sequence.IsArray())
  {
    return sequence[0];
  }
else
  {
    return sequence.charAt(0);

  }*/
