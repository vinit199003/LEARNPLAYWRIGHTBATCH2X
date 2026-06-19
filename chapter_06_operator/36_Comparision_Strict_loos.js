// === (strict equality) and !== (strict inequality) are comparison operators in JavaScript that check for both value and type without performing type coercion.

// The strict equality operator (===) returns true if both operands are of the same type and have the same value, and false otherwise. For example:
console.log( '5 === 5:', 5 === 5 ); // true (same type and value)
console.log( '5 === "5":', 5 === '5' ); // false (different types)

// == (equality) and != (inequality) are comparison operators that perform type coercion before making the comparison. This means that if the operands are of different types, JavaScript will attempt to convert them to a common type before comparing their values. For example:
console.log( '5 == "5":', 5 == '5' );   // true (type coercion converts "5" to 5 before comparison) 
console.log( '5 != "5":', 5 != '5' );   // false (type coercion converts "5" to 5 before comparison)

// In summary, === and !== check for both value and type without type coercion, while == and != perform type coercion before comparing values. It's generally recommended to use === and !== to avoid unexpected results due to type coercion.
console.log( 0 == "" ); // true (type coercion converts false to 0 before comparison)

console.log( true == "1" ); // true loose comparison, type coercion converts "1" to 1 and true to 1 before comparison

console.log( false == "0" ); // true loose comparison, type coercion converts "0" to 0 and false to 0 before comparison

console.log( null == undefined ); // true loose comparison, null and undefined are considered equal in loose comparison

console.log( null === undefined ); // false strict comparison, null and undefined are of different types

cosnsole.log( true === 1 ); // false strict comparison, true is a boolean and 1 is a number, so they are of different types

console.log( false === 0 ); // false strict comparison, false is a boolean and 0 is a number, so they are of different types

console.log( true == "1" ); // true loose comparison, type coercion converts "1" to 1 before comparison