// importing a default export and { named exports }, named export distinguished by using { }
import somethingEvenMoreElse, { something, somethingElse } from "./something.js";

console.log("Hello " + something + ", " + somethingElse + ', ' + somethingEvenMoreElse + ".");

// if dont use curly braces then get default export, which is where want module to only export one thing
// can have both default export AND named exports
// can also include it after used, still works
// import somethingEvenMoreElse from './something.js'

// calling the broswer global
// value of d3 global variable is an object, and on that object are all methods of D3 (functions that are a property of an object)
// all an object, quite clever!
console.log(d3)
