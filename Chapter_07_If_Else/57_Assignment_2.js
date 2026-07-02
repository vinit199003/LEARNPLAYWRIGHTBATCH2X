// //Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid
// Sample Input / Output:
// Input: 404
// Output: Client console.error();
// Input: 200
// Output: Success

let statusCode = 200;
if ( statusCode >= 200 && statusCode <= 299 ) {
    console.log( "Success" );
} else if ( statusCode >= 300 && statusCode <= 399 ) {
    console.log( "Redirection" );
} else if ( statusCode >= 400 && statusCode <= 499 ) {
    console.log( "Client Error" );
} else if ( statusCode >= 500 && statusCode <= 599 ) {
    console.log( "Server Error" );
} else {
    console.error( "Invalid Status Code" );
}

// Question 2 — Test Case Pass / Fail Verdict
// Problem: Compare actual result with expected result and print test verdict.
// Sample Input / Output:
// expected = "Login Successful"
// actual = "Login Successful"
// Output: ✅ Test Passed
// expected = "Login Successful"
// actual = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

let expected = "Login Successful";
let actual = "Login Successful";
let actual1 = "Invalid Credentials";
if ( expected === actual ) {
    console.log( "✅ Test Passed" );
} else if ( expected === actual1 ) {
    console.error( `❌ Test Failed — Expected: ${ expected }, Got: ${ actual1 }` );
} else {
    console.error( `❌ Test Failed — Expected: ${ expected }, Got: ${ actual }` );
}

// Question 3 — Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical( block release )
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score
// Sample Input / Output:
// Input: 9
// Output: Severity: Critical — Block release
// Input: 5
// Output: Severity: Medium

let bugImpactSavirity = 11;
if ( bugImpactSavirity >= 9 && bugImpactSavirity <= 10 ) {
    console.log( `${ bugImpactSavirity } - Severity: Critical — Block release,${ bugImpactSavirity } ` );
} else if ( bugImpactSavirity >= 7 && bugImpactSavirity <= 8 ) {
    console.log( `${ bugImpactSavirity } - Severity: High,${ bugImpactSavirity } ` );
} else if ( bugImpactSavirity >= 4 && bugImpactSavirity <= 6 ) {
    console.log( `${ bugImpactSavirity } - Severity: Medium,${ bugImpactSavirity } ` );
} else if ( bugImpactSavirity >= 1 && bugImpactSavirity <= 3 ) {
    console.log( `${ bugImpactSavirity } - Severity: Low,${ bugImpactSavirity } ` );
} else {
    console.error( `${ bugImpactSavirity } - Invalid score,${ bugImpactSavirity } ` );
}