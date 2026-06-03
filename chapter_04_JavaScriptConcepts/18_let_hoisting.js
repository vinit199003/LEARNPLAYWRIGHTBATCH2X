//console.log( score ); // Output: ReferenceError: Cannot access 'score' before initialization, because let variables are not hoisted in the same way as var. They are in a "temporal dead zone" from the start of the block until the declaration is processed. Accessing them before declaration results in a ReferenceError.
let score = 100; // Declaration and initialization of the variable score.
console.log( score ); // Output: 100, because now the variable score has been declared and initialized.


{
    //TDZ (Temporal Dead Zone) is the time between the start of a block and the point where a variable declared with let or const is initialized. During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError. This is different from var, which is hoisted and initialized with undefined, allowing access before declaration without an error.

    //-- TDZ for "scrore" variable starts here
    //console.log( score ); // Output: ReferenceError: 
    //sore = 50; // Output: ReferenceError: 
    //typeof score; // Output: ReferenceError: 
    //-- TDZ for "score" variable ends here when it is declared and initialized.

    let score = 100; // Declaration and initialization of the variable score.
    console.log( score ); // Output: 100, because the variable score is declared and initialized within this block scope.
}