//Modulus operator "%" gives the remainder of the division of two numbers. It is used to find out how many times one number can be divided by another and what is left after the division. For example, if you divide 10 by 3, the quotient is 3 and the remainder is 1, so 10 % 3 will give you 1. This operator is particularly useful in scenarios such as determining if a number is even or odd (e.g., n % 2 will give 0 for even numbers and 1 for odd numbers) or in cyclic operations where you want to wrap around a certain range of values.
let a = 10;
let b = 3;
let modulus = a % b; // Modulus (remainder)
console.log( 'modulus:', modulus );

// Modulus operator gives the remainder of the division of a by b. In this case, 10 divided by 3 is 3 with a remainder of 1, so the modulus is 1.

console.log( 'a % b:', 101 % 2 ); // Modulus (remainder)
console.log( 'a % b:', 100 % 2 ); // Modulus (remainder)

//n%2 will give 0 for even numbers and 1 for odd numbers, which is a common way to check if a number is even or odd.