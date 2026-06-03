// Function is a block of code which performs a specific task. It is reusable and can be called multiple times in a program. Functions can take parameters and return values. They help in breaking down complex problems into smaller, manageable pieces.
// JavaScript allows defining the same function name more than once in the same scope, but the later definition replaces the earlier one.
//If you have two function declarations with the same name, the second one overwrites the first.
//At runtime, only the last definition is used.
// Function declaration
function hello() {
    console.log( "Hello World" );
}

// Calling the function
function hello() {
    console.log( "Hi World" );
}
// Calling the function
hello();