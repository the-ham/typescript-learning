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
// How to write a function accepting typed paramenters
// regular functions:
function userSignUp(name: string, email: string, isPremium: boolean) {
  return name.toUpperCase;
}

userSignUp(1,2,3); // Typescript throws error - good!

// For a function that both accepts AND outputs a specified type:
function getAPos(s: string): number {
  return s.toLowerCase().search("a");
}

// In arrow function form:
const getBPos = (s: string): number => {
  return s.toLowerCase().search("b")
}

/////////////////////////////////////////////////////////////////////

export {}
