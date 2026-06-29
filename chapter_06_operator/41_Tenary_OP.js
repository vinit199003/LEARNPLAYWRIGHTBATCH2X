console.log( '--- Ternary Operator ---' );

let age = 20;

let result = age >= 18 ? 'Eligible to vote' : 'Not eligible to vote';
//Explain above line: The above line uses the ternary operator to check if the variable 'age' is greater than or equal to 18. If the condition is true, it assigns the string 'Eligible to vote' to the variable 'result'. If the condition is false, it assigns 'Not eligible to vote' to 'result'. This is a concise way to perform conditional checks and assign values based on those checks.
console.log( result );
console.log( result >= 18 ? 'Eligible to vote' : 'Not eligible to vote' );

let marks = 45;
console.log( marks >= 35 ? 'Pass' : 'Fail' );
//Explain above line: The above line uses the ternary operator to check if the variable 'marks' is greater than or equal to 35. If the condition is true, it assigns the string 'Pass' to the console.log. If the condition is false, it assigns 'Fail' to the console.log.
let temperature = 30;
console.log( temperature > 35 ? 'Hot day' : 'Normal day' );
//Explain above line: The above line uses the ternary operator to check if the variable 'temperature' is greater than 35. If the condition is true, it assigns the string 'Hot day' to the console.log. If the condition is false, it assigns 'Normal day' to the console.log.

let number = 11;
let parity = number % 2 == 0 ? 'Even' : 'Odd';
console.log( parity );

//What's the difference between ternary operator and if else statement?The main difference between the ternary operator and an if-else statement is their syntax and conciseness.
// 1. Syntax: The ternary operator is a single line expression that uses the syntax condition ? value_if_true : value_if_false.In contrast, an if-else statement uses multiple lines and requires the use of curly braces to define blocks of code.
// 2. Conciseness: The ternary operator is more concise and can be used for simple conditional assignments, making the code shorter and easier to read.On the other hand, if-else statements are more suitable for complex conditions and multiple branches of logic, allowing for more flexibility in handling different scenarios.

let responseTime = 800;
let sla = 1000;
let slaStatus = responseTime <= sla ? 'Within SLA' : 'Outside SLA';
console.log( `Response: ${ responseTime }-ms, SLA: ${ sla }-ms, Status: ${ slaStatus }` );

//nested ternary operator
let score = 100;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
console.log( `Score: ${ score }, Grade: ${ grade }` );

//provide nested example with API response status code
let apiStatusCode = 200;
let apiStatus = apiStatusCode === 200 ? 'Success' : apiStatusCode === 404 ? 'Not Found' : 'Error';
console.log( `API Status Code: ${ apiStatusCode }, Status: ${ apiStatus }` );

//defination of nested ternary operator: A nested ternary operator is a conditional expression that allows for multiple conditions to be evaluated in a single line of code. It is an extension of the basic ternary operator, which has the syntax condition ? value_if_true : value_if_false. In a nested ternary operator, the value_if_false part can itself be another ternary operator, allowing for more complex decision-making in a compact form. However, while nested ternary operators can make code shorter, they can also reduce readability if overused or made too complex.