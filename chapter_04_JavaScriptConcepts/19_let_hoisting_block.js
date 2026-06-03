// let and constant is block scoped, which means they are only accessible within the block they are defined in. This is different from var, which is function scoped and can be accessed outside of the block it is defined in.

let x = "ADC";

if ( true ) {
    let x = "XYZ";
    console.log( x ); // Output: XYZ, because this x is a different variable that is scoped to this block.
}
console.log( x ); // Output: ADC, because this x is the variable that is scoped to the global scope, and it is not affected by the block scope of the if statement.

// In JavaScript, variables declared with let and const are not hoisted in the same way as var. They are in a "temporal dead zone" from the start of the block until the declaration is processed. Accessing them before declaration results in a ReferenceError. This is different from var, which is hoisted and initialized with undefined, allowing access before declaration without an error.
