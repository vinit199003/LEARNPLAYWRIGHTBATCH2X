console.log( greeting ); // Output: undefined, because of hoisting, the declaration of greeting is hoisted to the top, but its assignment is not.
var greeting = "Hello World";
console.log( greeting ); // Output: Hello World, because now the variable greeting has been assigned a value.
// In JavaScript, variable and function declarations are hoisted to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. So if you try to access a variable before it has been assigned a value, it will return undefined.
// Function declarations are also hoisted, which means you can call a function before it is defined in the code. However, if you use a function expression (assigning a function to a variable), only the variable declaration is hoisted, not the function assignment. So if you try to call a function expression before it is assigned, it will result in an error.
console.log( sayHello() ); // Output: Hello World, because the function declaration is hoisted to the top.      
