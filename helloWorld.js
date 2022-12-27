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
// How to write a function accepting typed parameters
// regular functions:
function userSignUp(name, email, isPremium) {
    return name.toUpperCase;
}
// userSignUp(1,2,3); // Typescript throws error - good!
userSignUp("Bob", "bob@gmail.com", true);
// For a function that both accepts AND outputs a specified type:
function getAPos(s) {
    return s.toLowerCase().search("a");
}
// In arrow function form:
var getBPos = function (s) {
    return s.toLowerCase().search("b");
};
// Functions that handle arrays of typed elements:
var heroes = ["thor", "spiderman", "batman"];
heroes.map(function (hero) {
    return "hello ".concat(hero); // output type is also specified
});
/////////////////////////////////////////////////////////////////////
// Type "void"
// This is only useful in specifying the type of the output of a function that doesn't return a typed value (e.g. and error handler)
function warnUser() {
    console.log("This is my warning message");
}
/////////////////////////////////////////////////////////////////////
// Type "never"
// "never" is a return type used in functions that never returns (e.g. throwing an error or the function is an infinite loop)
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
/////////////////////////////////////////////////////////////////////
// Functions handling objects (both input and output)
var getUser = function (_a) {
    var string = _a.name, number = _a.age, boolean = _a.isActive;
};
var getCourse = function () {
    return { name: "Next.js", price: 45 };
};
function createUser(user) {
    return { name: "Bob", age: 45, isActive: true };
}
var userDetails = {
    _id: "123",
    name: "Bob"
};
/////////////////////////////////////////////////////////////////////
// Typing arrays and higher dimensional arrays
var arrayOfStrings = []; // e.g. ["bob", "jane", "sam"]
var arrayOfArrayOfStrings = []; // e.g. [["bob"],["jane"],["sam"]]
var allUsers = []; // An array of newUser objects
allUsers.push({ name: "spiderman", isActive: true });
/////////////////////////////////////////////////////////////////////
// Union types (basically allowing more than 1 type)
var score = 33; // score can either be a number or a string
var john = { username: "John", password: "12345" };
john = { username: "John", password: "12345", adminlevel: 1 }; // john can receive an adminlevel even though initialized as a NormalUser
// Arrays that can receive multiple typed elements
var data = [];
data.push("abc", 123);
// Literal typing
var seatType;
// seatType = "crew" // throws error as expected
seatType = "aisle";
var tupp = [1, "a"];
// tupp.push("sad"); // Tuple types do not prevent array methods like .pop, .push etc.
/////////////////////////////////////////////////////////////////////
// Enums
// Enums are for creating a closed set of choices for variables, so that not passing one of the allowed values will throw an error
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE; // instead of mySeat = 1 or mySeat = 57 etc. which is less safe
var myRating = 2 /* DessertRating.GOOD */; // works as well
var ambery = {
    dbId: 123,
    email: "a@a.com",
    userId: 123,
    startTrial: function () { return "Trial started"; },
    getCoupon: function (name, val) { return "Your ".concat(name, " is ").concat(val * 100, "%"); }
};
var typedFunction = function (arg1, arg2 /*arg2 = "string"*/) {
    if (arg2 === void 0) { arg2 = 10; }
    return "string"; // return type also must be a string as per the interface
};
var myAdmin = { token: "abc", role: "admin" };
