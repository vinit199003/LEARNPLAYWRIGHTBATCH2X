// 27string.js
// String examples in JavaScript and preferred usage patterns.

// 1. Single-quoted string
const singleQuote = 'Hello, single quotes!';
console.log( 'singleQuote:', singleQuote );

// 2. Double-quoted string
const doubleQuote = "Hello, double quotes!";
console.log( 'doubleQuote:', doubleQuote );

// 3. Template literal
const templateLiteral = `Hello, template literal!`;
console.log( 'templateLiteral:', templateLiteral );

// 4. Template literal with expression interpolation
const name = 'Alice';
const age = 30;
const interpolated = `My name is ${ name } and I am ${ age } years old.`;
console.log( 'interpolated:', interpolated );

// 5. Multiline string using template literal
const multiline = `This is line one.
This is line two.
This is line three.`;
console.log( 'multiline:' );
console.log( multiline );

// 6. Escape sequences in strings
const escapedSingle = 'It\'s easy to escape single quotes.';
const escapedDouble = "She said, \"Hello!\"";
console.log( 'escapedSingle:', escapedSingle );
console.log( 'escapedDouble:', escapedDouble );

// 7. Preferred usage in modern JavaScript
// - Use template literals when you need interpolation or multiline strings.
// - Use single or double quotes consistently for plain strings according to your project style.
// - Most style guides prefer single quotes for simple strings and template literals for dynamic text.

const plainString = 'Use single quotes for simple text when there is no interpolation.';
const dynamicString = `Use template literals when you need ${ name } inserted.`;
console.log( 'plainString:', plainString );
console.log( 'dynamicString:', dynamicString );

// 8. Summary of preferences
console.log( 'Preferred:' );
console.log( '- simple strings: use single quotes or double quotes consistently' );
console.log( '- dynamic/multiline strings: use template literals' );
console.log( '- avoid mixing quote styles in the same project unless required' );
