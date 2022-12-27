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
// Tuples

type tuplee = [number, string]

let tupp:tuplee = [1, "a"]

// tupp.push("sad"); // Tuple types do not prevent array methods like .pop, .push etc.

/////////////////////////////////////////////////////////////////////
// Enums
// Enums are for creating a closed set of choices for variables, so that not passing one of the allowed values will throw an error

enum SeatChoice {
  AISLE, // default enum index starts at 0. Can also manually set starting index to any number (AISLE = 1). Can also make "string enums" by setting each enum to a string (AISLE = "aisle" etc.)
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.AISLE // instead of mySeat = 1 or mySeat = 57 etc. which is less safe

// Another way to declare Enums are by prefixing the declaration with "const"
const enum DessertRating {
  BAD,
  OK,
  GOOD,
}

const myRating = DessertRating.GOOD // works as well

/*
The main difference between using enum vs const enum is that "enum" alone will generate an object via
an IIFE, which produces a bunch of JS code but preserves the enum's existence in compile time.

For "const enum", something like "mySeat = SeatChoice.AISLE" just gets transpiled into
"mySeat = 1". Which removes the generation of the IIFE, but also disallows the enum to contain any
computations, such as:

const enum TestEnum {
  item1 = "item1",
  item2 = something.computed // throws an error
}
*/

/////////////////////////////////////////////////////////////////////
// Interfaces
interface interfaceUser {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  startTrial: () => string, // Or "startTrial(): string"
  getCoupon(couponname: string, value: number): string // Use this syntax instead
}

const ambery: interfaceUser = {
  dbId: 123,
  email: "a@a.com",
  userId: 123,
  startTrial: () => {return "Trial started"},
  getCoupon: (name: "Christmas discount", val: 0.2) => {return `Your ${name} is ${val*100}%`}
}

// Interfaces can also define the shape of functions
interface functionType {
  (arg1: string, arg2: number): string
}

const typedFunction: functionType = (arg1, arg2=10/*arg2 = "string"*/) => { // (arg1 and arg2)s' types are interred as string and number from the interface
  return "string" // return type also must be a string as per the interface
}

// Interfaces can be "reopened" a.k.a. you can add more properties to an interface later
interface interfaceUser {
  // newProp: string // now, the variable ambery throws and error requiring a "newProp" argument
}

// Inheritance is also in interfaces
interface regUser {
  token: string
}

interface admin extends regUser {
  role: "admin" | "superadmin"
}

const myAdmin: admin = {token: "abc", role: "admin"}

/////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=30LWjhZzg50&ab_channel=freeCodeCamp.org
// CURRENT TIMESTAMP: 2:06:34

export {}
