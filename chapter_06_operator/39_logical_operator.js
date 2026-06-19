console.log( '--- Logical Operators ---' );

console.log( true && true ); // true: both conditions are true
console.log( true && false ); // false: one condition is false
console.log( false && true ); // false: one condition is false

console.log( true || false ); // true: one condition is true
console.log( false || false ); // false: both conditions are false
console.log( false || true ); // true: one condition is true

console.log( !true ); // false: negates the value
console.log( !false ); // true: negates the value

console.log( 5 > 3 && 10 > 4 ); // true: both comparisons are true
console.log( 5 > 3 && 10 < 4 ); // false: second comparison is false
console.log( 5 < 3 || 10 > 4 ); // true: second comparison is true

console.log( '--- Short-Circuit Examples ---' );

console.log( false && 'hello' ); // false: right side is not evaluated
console.log( true && 'hello' ); // hello: returns the second value when first is truthy

console.log( true || 'world' ); // true: right side is not evaluated
console.log( false || 'world' ); // world: returns the second value when first is falsy

console.log( '--- Truthy / Falsy Checks ---' );

console.log( !!1 ); // true: converts value to boolean
console.log( !!0 ); // false: 0 is falsy
console.log( !!'' ); // false: empty string is falsy
console.log( !!'JS' ); // true: non-empty string is truthy
