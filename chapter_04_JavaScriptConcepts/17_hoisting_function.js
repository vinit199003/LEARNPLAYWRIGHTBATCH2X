function hoistingExample() {
    console.log( status_code );   // Output: undefined, because of hoisting, the declaration of status_code is hoisted to the top, but its assignment is not.
    var status_code = "Hello World";
    console.log( status_code );
}

hoistingExample();