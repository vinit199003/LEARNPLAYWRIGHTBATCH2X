var a = 10;
console.log( "Global a: " + a ); // Output: 10

function printHello() {
    console.log( "Hello World" );
    var a = 20; // This a is different from the global a, it is function scoped to printHello.
    console.log( "Inside printHello: " + a ); // Output: 20
    if ( true ) {
        var a = 30; // This will overwrite the previous a declared inside the function, but it will not affect the global a.
        console.log( "Inside if block: " + a ); // Output: 30
    }
    console.log( "Inside printHello after if block: " + a ); // Output: 30, because var is function scoped, not block scoped.
}
console.log( "Global a before calling printHello: " + a ); // Output: 10
printHello();
console.log( "Global a after calling printHello: " + a ); // Output: 10, because the a inside printHello does not affect the global a due to function scope.    