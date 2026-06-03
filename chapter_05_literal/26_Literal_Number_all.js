// 26_Literal_Number_all.js
// Demonstrate all supported numeric literal types in JavaScript.

// 1. Decimal integer literal
const decimalInteger = 123;
console.log( 'decimalInteger:', decimalInteger );
console.log( 'typeof decimalInteger:', typeof decimalInteger );

// 2. Decimal floating-point literal
const decimalFloat = 3.14159;
console.log( 'decimalFloat:', decimalFloat );

// 3. Exponential (scientific) notation
const exponentialPositive = 1.23e3; // 1.23 * 10^3 = 1230
const exponentialNegative = 4.56e-2; // 4.56 * 10^-2 = 0.0456
console.log( 'exponentialPositive:', exponentialPositive );
console.log( 'exponentialNegative:', exponentialNegative );

// 4. Hexadecimal literal
const hexadecimal = 0xFF; // 255
console.log( 'hexadecimal:', hexadecimal );

// 5. Binary literal
const binary = 0b1010; // 10
console.log( 'binary:', binary );

// 6. Octal literal
const octal = 0o755; // 493
console.log( 'octal:', octal );

// 7. BigInt literal
const bigIntValue = 9007199254740991n; // BigInt literal ends with n
console.log( 'bigIntValue:', bigIntValue );
console.log( 'typeof bigIntValue:', typeof bigIntValue );

// 8. Special numeric values (not literals, but important number-related values)
const inf = Infinity;
const negativeInf = -Infinity;
const notANumber = NaN;
console.log( 'Infinity:', inf );
console.log( '-Infinity:', negativeInf );
console.log( 'NaN:', notANumber );

// 9. Leading zeros are not allowed for integer literals in strict mode,
// but 0, 0o, and 0x prefixes are valid for decimal, octal, and hexadecimal.
const zero = 0;
const octalWithPrefix = 0o10; // 8
const hexWithPrefix = 0x10; // 16
console.log( 'zero:', zero );
console.log( 'octalWithPrefix:', octalWithPrefix );
console.log( 'hexWithPrefix:', hexWithPrefix );

// 10. Numeric operations with different literal types
console.log( 'decimal + hex:', decimalInteger + hexadecimal );
console.log( 'binary * octal:', binary * octal );
console.log( 'float / exponential:', decimalFloat / exponentialNegative );
console.log( 'BigInt + BigInt:', bigIntValue + 1n );