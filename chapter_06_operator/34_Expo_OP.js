//Exponentiation operator "**" raises the first operand to the power of the second operand. For example, 2 ** 3 will give you 8, because 2 raised to the power of 3 is 8 (2 * 2 * 2). This operator is useful for performing mathematical calculations that involve powers, such as calculating squares, cubes, or any other exponentiation. It can also be used in combination with assignment operators (e.g., x **= 3) to raise a variable to a certain power and assign the result back to that variable.

let base = 2;
let exponent = 3;
let result = base ** exponent;
console.log( 'result:', result ); // Output: 8 (2*2*2 = 8)

console.log( '2 ** 3:', 2 ** 3 ); // Output: 8 (2 raised to the power of 3 is 8)
console.log( '5 ** 2:', 5 ** 2 ); // Output: 25 (5 raised to the power of 2 is 25)

// Using exponentiation operator with assignment 
let x = 5;
x **= 2; // This is equivalent to x = x ** 2
console.log( 'Using exponentiation operator with assignment x:', x ); // Output: 25 (5 raised to the power of 2 is 25)  () 
