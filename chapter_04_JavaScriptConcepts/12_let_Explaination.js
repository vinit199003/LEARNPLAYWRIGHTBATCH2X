// "let" can be defined like
let browser = "Chrome";
// let browser = "FireFox" // Redeclaration not allowed
browser = "edge" // reassignment allowed.  
let a = 10;

// With let, the variable is block scoped, which means that it is only accessible within the block in which it is declared. This can help prevent unintended consequences and make code easier to understand.
function testLet() {
    if ( true ) {
        let a = 20; // This a is different from the global a, and it will not overwrite the global a due to block scope.
        console.log( "Inside if block: " + a ); // Output: 20
    }
    // let a = 30; // This will cause an error because we cannot redeclare a variable in the same scope.
    console.log( "Inside function after if block: " + a ); // Output: 10, because the a declared inside the if block is not accessible here.
    console.log( "Outside if block: " + a ); // Output: 10
}
//let a = 40; // This will cause an error because we cannot redeclare a variable in the same scope.SyntaxError: Identifier 'a' has already been declared

testLet();
console.log( "Global a: " + a ); // Output: 10, the global a is not affected by the block-scoped a inside the function.


if ( true ) {
    let executetime = "Executed inside if block";
    console.log( "InSide the block: " + executetime ); // Output: Executed inside if block
}

console.log( "Outside the block: " + executetime ); // ReferenceError: executetime is not defined, because executetime is block scoped and not accessible outside the if block.

// In summary, "let" provides block scope, which can help prevent unintended consequences and make code easier to understand, while "var" is function scoped and can lead to issues with variable hoisting and unintended overwriting of variables.

// It is **hoisted** but not initialized to undefined like var. It is in a "temporal dead zone" from the start of the block until the declaration is processed, which means you cannot access it before its declaration. Accessing it before declaration will result in a ReferenceError.
console.log( "Value of b before declaration: " + b );   // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log( "Value of b after declaration: " + b );    // Output: 20


