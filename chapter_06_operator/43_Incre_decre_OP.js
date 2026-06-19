console.log( '--- Increment and Decrement Operators ---' );

let count = 5;

console.log( count++ ); // 5: post-increment prints first, then adds 1
console.log( count ); // 6

console.log( ++count ); // 7: pre-increment adds 1 first, then prints
console.log( count ); // 7

console.log( count-- ); // 7: post-decrement prints first, then subtracts 1
console.log( count ); // 6

console.log( --count ); // 5: pre-decrement subtracts 1 first, then prints
console.log( count ); // 5

let value = 10;//How many times will the value be incremented and decremented in the following expression? 
console.log( value++ + ++value ); // 22: 10 + 12 Explanation:
// value++: post-increment, returns 10, then value becomes 11
// ++value: pre-increment, value becomes 12, returns 12
// So the expression is 10 + 12 = 22
console.log( value ); // 12 because after the previous operation, value was incremented to 12.
