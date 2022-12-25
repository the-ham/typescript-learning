// Hello world example and declaring typed variables
const myName: string = "Ambery";
const myNum: number = 22;

/*
actually don't have to explicitly type the variables if it is straightforward
- this is called "type inference"
*/
const isAlive = true;

console.log(myName);

/////////////////////////////////////////////////////////////////////
// The "any" type, how it tends to manifest and that it SHOULD NOT BE ALLOWED to exist!

let variable; // change this line to "let variable: string;" to restrict future references to type string

const someFunc = () => {
  return "a string!"
}

variable = someFunc(); // Here if you hover "variable" it shows that it is of type "any", BAD

/////////////////////////////////////////////////////////////////////
// How to write a function accepting typed parameters
// regular functions:
function userSignUp(name: string, email: string, isPremium: boolean) {
  return name.toUpperCase;
}

// userSignUp(1,2,3); // Typescript throws error - good!
userSignUp("Bob", "bob@gmail.com", true);

// For a function that both accepts AND outputs a specified type:
function getAPos(s: string): number {
  return s.toLowerCase().search("a");
}

// In arrow function form:
const getBPos = (s: string): number => {
  return s.toLowerCase().search("b")
}

// Functions that handle arrays of typed elements:
const heroes = ["thor", "spiderman", "batman"];

heroes.map((hero): string => { // Here TS smartly determines that the elements should be of type "string" based on the context of "heroes"
  return `hello ${hero}` // output type is also specified
})

/////////////////////////////////////////////////////////////////////
// Type "void"
// This is only useful in specifying the type of the output of a function that doesn't return a typed value (e.g. and error handler)

function warnUser(): void {
  console.log("This is my warning message");
}

/////////////////////////////////////////////////////////////////////
// Type "never"
// "never" is a return type used in functions that never returns (e.g. throwing an error or the function is an infinite loop)

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

/////////////////////////////////////////////////////////////////////
// Functions handling objects (both input and output)
const getUser = ({name: string, age: number, isActive: boolean}) => {}

const getCourse = ():{name: string, price: number} => {
  return {name: "Next.js", price: 45}
}

/////////////////////////////////////////////////////////////////////
// Type aliases (basically saving a custom "type" for future reference)
type User = {
  name: string;
  age: number;
  isActive: boolean;
}

function createUser(user: User): User {
  return {name: "Bob", age: 45, isActive: true}
}

/////////////////////////////////////////////////////////////////////
// Read-only and optional object entries
type myUser = {
  readonly _id: string; // makes _id of myUser object unchangeable after declaration
  name: string;
  gender?: string; // makes gender an optional parameter of myUser
}

let userDetails: myUser = {
  _id: "123",
  name: "Bob"
}

// userDetails._id = "0" // _id is not re-assignable thanks to readonly

/////////////////////////////////////////////////////////////////////
// Creating more advanced types using existing types as building blocks
type cardNumber = {
  cardnumber: string;
}

type cardCVV = {
  cardCVV: number;
}

type cardDetails = cardNumber & cardCVV

/////////////////////////////////////////////////////////////////////
// Typing arrays and higher dimensional arrays
const arrayOfStrings: string[] = []; // e.g. ["bob", "jane", "sam"]
const arrayOfArrayOfStrings: string[][] = []; // e.g. [["bob"],["jane"],["sam"]]

type newUser = {
  name: string;
  isActive: boolean;
}

const allUsers: newUser[] = []; // An array of newUser objects
allUsers.push({name: "spiderman", isActive: true})

/////////////////////////////////////////////////////////////////////
// Union types (basically allowing more than 1 type)
let score: number | string = 33; // score can either be a number or a string

// also works for objects that allow multiple types
type NormalUser = {
  username: string;
  password: string;
}

type AdminUser = {
  username: string;
  password: string;
  adminlevel: number;
}

let john: NormalUser | AdminUser = {username: "John", password: "12345"}
john = {username: "John", password: "12345", adminlevel: 1} // john can receive an adminlevel even though initialized as a NormalUser

// Arrays that can receive multiple typed elements
const data: (string | number)[] = [];
data.push("abc", 123)

// Literal typing
let seatType: "aisle" | "middle" | "window";
// seatType = "crew" // throws error as expected
seatType = "aisle"

/////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=30LWjhZzg50&ab_channel=freeCodeCamp.org
// CURRENT TIMESTAMP: 2:06:34

export {}
