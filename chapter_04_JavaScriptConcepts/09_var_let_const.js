//"var" can be dfined like 
var browser = "Chrome";
var browser = "FireFox" // Redeclaration allowed 
browser = "edge" // reassignment allowed.

//With about code same variable name can be used multiple times.
var testCase = [ "Login", "SignUp", "Logout" ];

for ( var i = 0; i < testCase.length; i++ ) {
    console.log( "Running test case: " + testCase[ i ] );
}

console.log( "Value of i after loop: and it is leaked outside" + i ); // i is accessible outside the loop

//"let" can be defined like 
let browser = "Chrome";
// let browser = "FireFox" // Redeclaration not allowed 
browser = "edge" // reassignment allowed.