let isLoggedIn = true;
let userRole = "editor";

if ( isLoggedIn ) {
    if ( userRole === "admin" ) {
        console.log( "Welcome, Admin!" );
    } else if ( userRole === "editor" ) {
        console.log( "Welcome, Editor!" );
    } else {
        console.log( "Welcome, User!" );
    }
} else {
    console.log( "Please log in to access the site." );
}