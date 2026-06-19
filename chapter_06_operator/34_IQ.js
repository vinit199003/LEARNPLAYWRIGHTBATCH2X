//compound assignment operator
//Compound assignment operators combine an arithmetic operation with assignment. They allow you to perform an operation on a variable and assign the result back to that variable in a more concise way. For example, instead of writing x = x + 5, you can use the compound assignment operator += to write x += 5, which achieves the same result. Similarly, there are compound assignment operators for subtraction (-=), multiplication (*=), division (/=), and modulus (%=). These operators help to simplify code and make it more readable when performing operations on variables.

let x = 10
x += 10;
console.log( 'x:', x ); // Output: 20 (10 + 10 = 20)

x -= 5;
console.log( 'x:', x ); // Output: 15 (20 - 5 = 15)
x *= 2;
console.log( 'x:', x ); // Output: 30 (15 * 2 = 30)
x /= 3;
console.log( 'x:', x ); // Output: 10 (30 / 3 = 10)
