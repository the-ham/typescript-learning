"use strict";
exports.__esModule = true;
// Hello world example and declaring typed variables
var myName = "Ambery";
var myNum = 22;
/*
actually don't have to explicitly type the variables if it is straightforward
- this is called "type inference"
*/
var isAlive = true;
console.log(myName);
/////////////////////////////////////////////////////////////////////
// The "any" type, how it tends to manifest and that it SHOULD NOT BE ALLOWED to exist!
var variable; // change this line to "let variable: string;" to restrict future references to type string
var someFunc = function () {
    return "a string!";
};
variable = someFunc(); // Here if you hover "variable" it shows that it is of type "any", BAD
/////////////////////////////////////////////////////////////////////
// How to write a function accepting typed paramenters
// regular functions:
function userSignUp(name, email, isPremium) {
    return name.toUpperCase;
}
userSignUp(1, 2, 3); // Typescript throws error - good!
// For a function that both accepts AND outputs a specified type:
function getAPos(s) {
    return s.toLowerCase().search("a");
}
// In arrow function form:
var getBPos = function (s) {
    return s.toLowerCase().search("b");
};
