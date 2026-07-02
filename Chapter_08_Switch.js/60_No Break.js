let day = 3;
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
        deault:
        console.log( 'Invalid day' )
}

//If Break will not added in the above code snippet, then all the cases after the matched case will be executed. In this case, since day is 3, it will print "Wednesday", "Thursday", "Friday", "Saturday", and "Sunday".