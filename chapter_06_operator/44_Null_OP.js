console.log( '--- Nullish Coalescing Operator ---' );

let userName = null;
let displayName = userName ?? 'Guest';
console.log( displayName ); // Guest
//Explain the above line: The above line uses the nullish coalescing operator (??) to check if the variable 'userName' is null or undefined. If 'userName' is null or undefined, it assigns the string 'Guest' to the variable 'displayName'. If 'userName' has a value (not null or undefined), it assigns that value to 'displayName'. This operator is useful for providing default values when dealing with potentially null or undefined variables.

let city = undefined;
console.log( city ?? 'Unknown city' ); // Unknown city

let age = 0;
console.log( age ?? 18 ); // 0: 0 is not null or undefined

let title = '';
console.log( title ?? 'Default title' ); // '': empty string is kept

console.log( null ?? 'Fallback value' ); // Fallback value
console.log( undefined ?? 'Fallback value' ); // Fallback value

console.log( '1:', null === 0 ); // false
console.log( "2", undefined === 0 ); // false
console.log( "3", null == undefined ); // true
console.log( "4", null === undefined ); // false
console.log( "5", null >= 0 ); // false