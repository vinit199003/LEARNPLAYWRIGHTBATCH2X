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

let a = 10;
let b = ++a; // unary plus operator, converts a to a number (no change here)
console.log( a );// 11: a is incremented to 11 Explain how the value of a is incremented to 11: The value of 'a' is incremented to 11 because the pre-increment operator (++a) increases the value of 'a' by 1 before it is assigned to 'b'. Therefore, 'a' becomes 11, and 'b' is assigned the value of 11 as well.
console.log( b ); // 11: a is incremented to 11, b is assigned the value of a after incrementing

//ERT expression: ERT stands for "Expression Result Type". In this context, it refers to the type of value that results from evaluating an expression. For example, in the expression 'value++ + ++value', the result is a number (22), and its type is 'number'. The ERT helps in understanding what kind of data type will be produced by a given expression in JavaScript.
//generate the table structure for the above expression with the following columns: Expression, Value of a, Value of b, Result, ERT.
// | Expression          | Value of a | Value of b | Result | ERT    |
// |---------------------|------------|------------|--------|--------|
// | value++ + ++value | 10 | 11 | 22 | number |
