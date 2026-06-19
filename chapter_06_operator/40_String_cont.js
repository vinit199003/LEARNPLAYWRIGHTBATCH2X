console.log( '--- String Concatenation ---' );

console.log( 'Hello' + ' ' + 'World' ); // Hello World
console.log( 'JavaScript' + ' is' + ' fun' ); // JavaScript is fun

let firstName = 'Vinit';
let lastName = 'Bhanushali';
let fullName = firstName + ' ' + lastName;

console.log( fullName ); // Vinit Bhanushali
console.log( 'My name is ' + fullName ); // My name is Vinit Bhanushali

console.log( '--- Concatenation with Numbers ---' );

console.log( 'Age: ' + 25 ); // Age: 25
console.log( 10 + '20' ); // 1020: number becomes string when one side is a string
console.log( '10' + 20 ); // 1020: string concatenation
console.log( 10 + 20 + '30' ); // 3030: 10 + 20 = 30, then concatenates with '30'
console.log( '30' + 10 + 20 ); // 301020: left to right concatenation

console.log( '--- Template Literals ---' );

console.log( `My full name is ${ fullName }` );
console.log( `2 + 3 = ${ 2 + 3 }` );
console.log( `${ firstName } ${ lastName } is learning JS` );

console.log( '--- Useful Examples ---' );

let city = 'Pune';
let country = 'India';

console.log( 'I live in ' + city + ', ' + country );
console.log( `I live in ${ city }, ${ country }` );
