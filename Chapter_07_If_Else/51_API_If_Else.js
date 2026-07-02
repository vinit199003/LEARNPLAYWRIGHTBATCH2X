let statusCode = 200;
if ( statusCode === 200 ) {
    console.log( "Success: The request was successful." );
} else if ( statusCode === 404 ) {
    console.log( "Error: The resource was not found." );
} else {
    console.log( "Error: An unexpected error occurred." );
}