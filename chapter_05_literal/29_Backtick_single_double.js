// 29_Backtick_single_double.js
// Difference in short:
// Single and double quotes are for normal strings; backticks are for template literals.
// Use backticks when you need ${} interpolation or multi-line text.

const single = 'Hello';
const double = "Hello";
const backtick = `Hello ${ single }`;

console.log( 'single:', single );
console.log( 'double:', double );
console.log( 'backtick:', backtick );
//[ www.rapidtables.com / convert / number / decimal - to - binary.html ? x = 10]( https://www.rapidtables.com/convert/number/decimal-to-binary.html?x=10) 

/*
  | Type/Form          | Example            | Notes                          |
  |--------------------|--------------------|--------------------------------|
  | Decimal Integer    | 42                 | Standard whole numbers         |
  | Binary             | 0b1010             | Base 2, starts with 0b         |
  | Octal              | 0o52               | Base 8, starts with 0o         |
  | Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
  | Float              | 3.14               | Decimal numbers                |
  | Exponential        | 1.5e3              | Scientific notation            |
  | Numeric Separator  | 1_000_000          | ES2021+, for readability       |
  | BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
  | Infinity           | Infinity           | Result of division by zero     |
  | NaN                | NaN                | Invalid numeric operation      |
  | Number Object      | new Number(42)     | Avoid, use primitive           |
*/

/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
Multi - line |     ✗      |   ✓
  Expression inside |     ✗      |   ✓  -> ${ a + b }
*/

