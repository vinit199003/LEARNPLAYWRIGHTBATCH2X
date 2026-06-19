console.log( '--- Nullish Coalescing Operator ---' );

let userName = null;
let displayName = userName ?? 'Guest';
console.log( displayName ); // Guest

let city = undefined;
console.log( city ?? 'Unknown city' ); // Unknown city

let age = 0;
console.log( age ?? 18 ); // 0: 0 is not null or undefined

let title = '';
console.log( title ?? 'Default title' ); // '': empty string is kept

console.log( null ?? 'Fallback value' ); // Fallback value
console.log( undefined ?? 'Fallback value' ); // Fallback value
