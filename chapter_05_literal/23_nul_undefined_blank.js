// 23_nul_undefined_blank.js
// Demonstrate the difference between null, undefined, and blank values in JavaScript.

// 1. undefined
// A variable is undefined when it has been declared but not assigned a value.
let a;
console.log('a:', a); // undefined
console.log('typeof a:', typeof a); // "undefined"

// A function returns undefined if it does not explicitly return a value.
function noReturn() {
  const x = 5;
}
console.log('noReturn():', noReturn()); // undefined

// 2. null
// null means "no value" or "empty value" and is explicitly assigned.
let b = null;
console.log('b:', b); // null
console.log('typeof b:', typeof b); // "object" (this is a historical JavaScript quirk)

// null is used intentionally when a variable should be empty.
let user = null;
console.log('user:', user); // null

// 3. blank
// In JavaScript, "blank" usually refers to an empty string "".
let c = "";
console.log('c:', c); // (empty string)
console.log('length of c:', c.length); // 0
console.log('typeof c:', typeof c); // "string"

// Comparison examples
console.log('a === undefined:', a === undefined); // true
console.log('b === null:', b === null); // true
console.log('c === "":', c === ""); // true

// Important differences
console.log('a == b:', a == b); // true because undefined and null are loosely equal
console.log('a === b:', a === b); // false because different types
console.log('b == "":', b == ""); // false
console.log('c == "":', c == ""); // true
console.log('c === "":', c === ""); // true

// Summary comments:
// - undefined: no value assigned yet
// - null: intentionally no value
// - "" (blank): empty string value
