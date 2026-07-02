let day = 8;
switch ( day ) {
    case 1:
        console.log( 'Monday' )
    case 2:
        console.log( 'Tuesday' )
    case 3:
        console.log( 'Wednesday' )
    case 4:
        console.log( 'Thursday' )
    case 5:
        console.log( 'Friday' )
    case 6:
        console.log( 'Saturday' )
    case 7:
        console.log( 'Sunday' )
}

let day1 = 8;
switch ( day1 ) {
    case 1:
        console.log( 'Monday' )
        break;
    case 2:
        console.log( 'Tuesday' )
        break;
    case 3:
        console.log( 'Wednesday' )
        break;
    case 4:
        console.log( 'Thursday' )
    case 5:
        console.log( 'Friday' )
        break;
    case 6:
        console.log( 'Saturday' )
        break;
    case 7:
        console.log( 'Sunday' )
        break;
}

//If default case is not added in the above code snippet, then if the value of day is not matched with any of the cases, then nothing will be printed. In this case, since day is 8, it will not match with any of the cases and nothing will be printed.