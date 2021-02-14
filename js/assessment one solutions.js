
//1.
function isBoolean(input)
{
    return typeof input=== "boolean"; //return the type of input being compared if it's a boolean
}



//2.
function isString(input)
{
    return typeof input==="string";
}



//3.
function isNoString(input)
{
    return !isString(input);
}

//4.
function isEmptyString(input)
{
    return input != null && input.length === 0;
}

//5.
function isNotANumber(input)
{
    return typeof input != "number";
}

//6.
function isNegative
{
    return input<0
}
//7.
function isPositive
{
    return input >0;
}

//8.
function isZero(input)
{
    return input==0;
}

//9.
function isArray(input)
{
    return Array.isArray(input);
}

//10.
function upperCase(input){
    if(isString(input)){
        return input.toUpperCase();
    }else {
        return false;
    }
}


//if parameter is = 25 return false

function SergioIs(annoying)
{
    if (annoying === 25)
        return false
    else return true
}

// function concat 2 strings

function togather(x,y)
{
    return x + y
}