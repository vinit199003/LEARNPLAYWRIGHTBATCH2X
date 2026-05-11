// 02_identifier.js
// Demonstrates different naming conventions for identifiers in JavaScript

// 1. Camel Case (recommended for variables and functions in JS)
let myVariableName = 'Camel Case'; // first word lowercase, subsequent words capitalized

// 2. Pascal Case (used for class names)
class MyClassName {
  constructor() {
    this.example = 'Pascal Case';
  }
}

// 3. Snake Case (not common in JS, but sometimes used for constants)
let my_variable_name = 'Snake Case'; // all lowercase, words separated by underscores

// 4. Kebab Case (not allowed for identifiers, but used in file names or CSS)
// let my-variable-name = 'Kebab Case'; // INVALID in JS, will cause error

// 5. UPPER CASE SNAKE (used for constants)
const MAX_COUNT = 100;

// 6. Hungarian Notation (prefix indicates type, not recommended in modern JS)
let strName = 'Hungarian Notation';

// Print all examples
console.log(myVariableName);
console.log(new MyClassName().example);
console.log(my_variable_name);
console.log(MAX_COUNT);
console.log(strName);

// Description:
// - Camel Case: myVariableName (preferred for variables, functions)
// - Pascal Case: MyClassName (preferred for classes, constructors)
// - Snake Case: my_variable_name (rare in JS, common in Python)
// - Kebab Case: my-variable-name (NOT valid for JS identifiers)
// - UPPER CASE SNAKE: MAX_COUNT (constants)
// - Hungarian Notation: strName (legacy style, not recommended)
