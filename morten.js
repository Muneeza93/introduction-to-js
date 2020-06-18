//static
/*function findBiggestFraction() {
    a>b? console.log("a: ", a) : console.log("b: ", b);
}

var a = 1/2;
var b = 4/7;

findBiggestFraction();

//add arguments to function:
function findBiggestFraction(a,b) {
    a>b? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction,secondFraction);
findBiggestFraction(7/16,13/25);
findBiggestFraction(1/2,3/4);

//return values from a function:
function findBiggestFraction(a,b) {
    var result;
    a>b? result = ("firstFraction", a) : result = ("secondFraction", b);
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

console.log(findBiggestFraction(firstFraction,secondFraction));*/

//anonymous functions;
/*var a = 3/4;
var b = 5/7;

var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;

}

console.log(theBiggest(13/15,7/8));
console.log(theBiggest);

//immediately invoked functional expressions:
var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;

}) (7/9,13/25)

console.log(theBiggest);*/

//variable scope
function findBiggestFunction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result; //local scope

    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

var firstFraction = 7/16; //global scope
var secondFraction = 13/25; //global scope

function doMath(a,b) {
    var result = a + b; //local scope
    return result;
}
    var a  = 8;
    var b = 6;

console.log(doMath(a,b));

//let and const
const MYCONSTANT = 5;
console.log(MYCONSTANT);

function logScope() {
    var localVar = 2;

    if (localVar) {
        let localVar = "i'm different!";
        console.log("nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
}

logScope();
