// 22_leteral.js
// Examples of all main JavaScript literal types.

// 1. Numeric literals
const intLiteral = 42;
const floatLiteral = 3.14;
const hexLiteral = 0xFF;      // 255
const binaryLiteral = 0b1010; // 10
const octalLiteral = 0o755;   // 493
console.log( 'intLiteral:', intLiteral );
console.log( 'floatLiteral:', floatLiteral );
console.log( 'hexLiteral:', hexLiteral );
console.log( 'binaryLiteral:', binaryLiteral );
console.log( 'octalLiteral:', octalLiteral );

// 2. BigInt literal
const bigIntLiteral = 9007199254740991n;
console.log( 'bigIntLiteral:', bigIntLiteral );
console.log( 'typeof bigIntLiteral:', typeof bigIntLiteral );

// 3. String literals
const singleQuoteString = 'Hello single quotes';
const doubleQuoteString = "Hello double quotes";
const templateLiteral = `Hello template literal`;
const expressionTemplate = `Sum is ${ 2 + 3 }`;
console.log( 'singleQuoteString:', singleQuoteString );
console.log( 'doubleQuoteString:', doubleQuoteString );
console.log( 'templateLiteral:', templateLiteral );
console.log( 'expressionTemplate:', expressionTemplate );

// 4. Boolean literals
const trueLiteral = true;
const falseLiteral = false;
console.log( 'trueLiteral:', trueLiteral );
console.log( 'falseLiteral:', falseLiteral );

// 5. Null literal
const nullLiteral = null;
console.log( 'nullLiteral:', nullLiteral );
console.log( 'typeof nullLiteral:', typeof nullLiteral ); // historical quirk: object

// 6. Array literal
const arrayLiteral = [ 1, 'two', true, null ];
console.log( 'arrayLiteral:', arrayLiteral );
console.log( 'arrayLiteral[1]:', arrayLiteral[ 1 ] );

// 7. Object literal
const objectLiteral = {
    name: 'Alice',
    age: 30,
    isMember: false,
    score: null
};
console.log( 'objectLiteral:', objectLiteral );
console.log( 'objectLiteral.name:', objectLiteral.name );

// 8. Regular expression literal
const regexLiteral = /abc\d+/gi;
console.log( 'regexLiteral:', regexLiteral );
console.log( 'regexLiteral.test("abc123"):', regexLiteral.test( 'abc123' ) );

// 9. Function literal (function expression)
const functionLiteral = function ( x ) {
    return x * x;
};
console.log( 'functionLiteral(5):', functionLiteral( 5 ) );

// 10. Arrow function literal
const arrowLiteral = x => x + 1;
console.log( 'arrowLiteral(7):', arrowLiteral( 7 ) );

// Note: undefined is not a literal in JavaScript; it is a primitive value produced when a variable is declared without an assignment.
let undefinedValue;
console.log( 'undefinedValue:', undefinedValue );
console.log( 'typeof undefinedValue:', typeof undefinedValue );
