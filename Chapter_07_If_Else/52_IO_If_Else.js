if ( "Hello" ) console.log( "This is a truthy value, so this will be printed." );
if ( "" ) console.log( "This is a falsy value, so this will not be printed." );
if ( 0 ) console.log( "This is a falsy value, so this will not be printed." );
if ( 1 ) console.log( "This is a truthy value, so this will be printed." );
if ( null ) console.log( "This is a falsy value, so this will not be printed." );
if ( undefined ) console.log( "This is a falsy value, so this will not be printed." );
if ( NaN ) console.log( "This is a falsy value, so this will not be printed." );
if ( [] ) console.log( "This is a truthy value, so this will be printed." );
if ( {} ) console.log( "This is a truthy value, so this will be printed." );

let name = undefined;
if ( name ) {
    console.log( "Name is defined." );
} else {
    console.log( "Name is not defined." );
}