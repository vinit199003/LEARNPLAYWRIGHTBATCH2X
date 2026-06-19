//comparison operator
//Comparison operators are used to compare two values and return a boolean result (true or false) based on the comparison. The common comparison operators include:

//1. Equality (==): Checks if two values are equal, performing type coercion if necessary. For example, 5 == '5' will return true because the string '5' is coerced to the number 5 before comparison.

//2. Strict Equality (===): Checks if two values are equal without performing type coercion. For example, 5 === '5' will return false because they are of different types (number and string).

//3. Inequality (!=): Checks if two values are not equal, performing type coercion if necessary. For example, 5 != '5' will return false because they are considered equal after type coercion.

//4. Strict Inequality (!==): Checks if two values are not equal without performing type coercion. For example, 5 !== '5' will return true because they are of different types.

//5. Greater than (>): Checks if the left operand is greater than the right operand. For example, 10 > 5 will return true.
//6. Less than (<): Checks if the left operand is less than the right operand. For example, 5 < 10 will return true.
//7. Greater than or equal to (>=): Checks if the left operand is greater than or equal to the right operand. For example, 10 >= 10 will return true.
//8. Less than or equal to (<=): Checks if the left operand is less than or equal to the right operand. For example, 5 <= 10 will return true.

console.log( '5 == "5":', 5 == '5' ); // true (type coercion) why? because the equality operator (==) performs type coercion, which means it converts the operands to a common type before making the comparison. In this case, the string "5" is coerced to the number 5, and since both operands are now of the same type and value, the comparison returns true.

console.log( '5 === "5":', 5 === '5' ); // false (strict equality, no type coercion) why? because the strict equality operator (===) checks for both value and type without performing type coercion. In this case, the left operand is the number 5, while the right operand is the string "5". Since they are of different types (number vs. string), the comparison returns false, even though their values are similar when type coercion is applied (as in the case of ==).

console.log( '5 != "4":', 5 != '4' ); // true (type coercion) why? because the inequality operator (!=) also performs type coercion, which means it converts the operands to a common type before making the comparison. In this case, the string "5" is coerced to the number 5, and since both operands are now of the same type and value, the comparison returns false.

console.log( '5 != "5":', 5 != '5' ); // false (type coercion) why? because the inequality operator (!=) also performs type coercion, which means it converts the operands to a common type before making the comparison. In this case, the string "5" is coerced to the number 5, and since both operands are now of the same type and value, the comparison returns false.

console.log( '5 !== "5":', 5 !== '5' ); // true (strict inequality, no type coercion) why? because the strict inequality operator (!==) checks for both value and type without performing type coercion. In this case, the left operand is the number 5, while the right operand is the string "5". Since they are of different types (number vs. string), the comparison returns true.

console.log( '10 > 5:', 10 > 5 ); // true
console.log( '5 < 10:', 5 < 10 ); // true
console.log( '10 >= 10:', 10 >= 10 ); // true why? because the greater than or equal to operator (>=) checks if the left operand is greater than or equal to the right operand. In this case, 10 is equal to 10, so the comparison returns true.
console.log( '5 <= 10:', 5 <= 10 ); // true
console.log( '5 >= 10:', 5 >= 10 ); // false
console.log( '10 <= 5:', 10 <= 5 ); // false why? because the less than or equal to operator (<=) checks if the left operand is less than or equal to the right operand. In this case, 10 is greater than 5, so the comparison returns false.
console.log( '5 == 5:', 5 == 5 ); // true
console.log( '5 === 5:', 5 === 5 ); // true
console.log( '5 != 5:', 5 != 5 ); // false
console.log( '5 !== 5:', 5 !== 5 ); // false why? because both operands are of the same type and value, so they are considered equal, resulting in false for both != and !== comparisons.
console.log( '5 > 5:', 5 > 5 ); // false
console.log( '5 < 5:', 5 < 5 ); // false
console.log( '5 >= 5:', 5 >= 5 ); // true
console.log( '5 <= 5:', 5 <= 5 ); // true
console.log( '5 >= 6:', 5 >= 6 ); // false
console.log( '5 <= 4:', 5 <= 4 ); // false


//Why this is fales console.log( '5 === "5":', 5 === '5' ); ?
//The expression 5 === "5" evaluates to false because the strict equality operator (===) checks for both value and type. In this case, the left operand is the number 5, while the right operand is the string "5". Since they are of different types (number vs. string), the comparison returns false, even though their values are similar when type coercion is applied (as in the case of ==).