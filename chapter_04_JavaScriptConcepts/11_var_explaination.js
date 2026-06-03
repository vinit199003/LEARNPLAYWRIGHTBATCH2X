var i = 10;

//var is function scoped, it means that if we declare a variable using  var inside a function, it will be accessible throughout the entire function, regardless of where it is declared. However, if we declare a variable using var inside a block (like an if statement or a for loop), it will still be accessible outside of that block, which can lead to unintended consequences.
function testVar() {
    if ( true ) {
        var i = 20; // This i is different from the global i, but it will overwrite the global i due to function scope.
        console.log( "Inside if block: " + i ); // Output: 20
    }
    var i = 30; // This will overwrite the previous i declared inside the function, but it will not affect the global i.
    console.log( "Inside function after if block: " + i ); // Output: 30
    console.log( "Outside if block: " + i ); // Output: 10
}
testVar();
console.log( "Global i: " + i ); // Output: 10, but if we had declared var i inside the function without var, it would have overwritten the global i.
