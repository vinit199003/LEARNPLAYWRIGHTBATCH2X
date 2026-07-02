let userName = "John";
let password = "password123";
let isAccountLocked = true;

if ( ( userName === "John" && password === "password123" ) && !isAccountLocked ) {
    console.log( "Login successful!" );
} else if ( isAccountLocked ) {
    console.log( "Your account is locked. Please contact support." );
}
