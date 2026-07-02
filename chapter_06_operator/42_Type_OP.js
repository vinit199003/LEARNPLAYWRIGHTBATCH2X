console.log( '--- Type Operator (typeof) ---' );

console.log( typeof 10 ); // number
console.log( typeof 'JavaScript' ); // string
console.log( typeof true ); // boolean
console.log( typeof undefined ); // undefined
console.log( typeof null ); // object
console.log( typeof NaN ); // number

let name = 'Vinit';
let age = 25;

console.log( typeof name );
console.log( typeof age );

console.log( typeof [ 1, 2, 3 ] ); // object
console.log( typeof { city: 'Pune' } ); // object
console.log( typeof function test() { } ); // function

//Defination of typeof operator: The typeof operator is a unary operator that returns a string indicating the type of the operand. It can be used to determine the data type of variables, literals, or expressions in JavaScript. The result of the typeof operator can be one of the following strings: "undefined", "object", "boolean", "number", "string", "function", or "symbol".
