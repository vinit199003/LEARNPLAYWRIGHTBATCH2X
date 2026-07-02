//let number = 7 then find number is odd or even
let number = 6;
if ( number % 2 === 0 ) {
    console.log( number + " is an even number." );
} else {
    console.log( number + " is an odd number." );
}

// One alternative is to use the bitwise AND operator:
let number2 = 6;
if ( number2 & 1 ) {
    console.log( number2 + " is an odd number." );
} else {
    console.log( number2 + " is an even number." );
}

//Student grad calculator
//Problem statement: take marks (0-100) and calculate the print grade on base on the rules:
//-90 and above A
//-80 to 89 B
//-70 to 79 C
//-60 to 69 D
//-below 60 Fail

let marks = 59;
if ( marks >= 90 ) {
    console.log( "You got A grade." );
} else if ( marks >= 80 ) {
    console.log( "You got B grade." );
} else if ( marks >= 70 ) {
    console.log( "You got C grade." );
} else if ( marks >= 60 ) {
    console.log( "You got D grade." );
} else {
    console.log( "You failed." );
}

//Problem statement: Take year and find it is leap year or not
//Rules for leap year:
//devide by 4 and not divide by 100 - Leap year
// or devided by 400 - Leap year
//Else - Not a leap year
let year = "2020"
if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
    console.log( year + " is a leap year." );
} else {
    console.log( year + " is not a leap year." );
}

//What is leap year and how to calculate leap year?
//A leap year is a year that has an extra day added to it, making it 366 days long instead of the usual 365 days. This extra day is added to the month of February, which has 29 days in a leap year instead of the usual 28 days. The purpose of a leap year is to keep our calendar year synchronized with the astronomical year, which is the time it takes for the Earth to complete one orbit around the Sun.
//To determine whether a year is a leap year, we use the following rules:
//1. If the year is evenly divisible by 4, it is a leap year.
//2. However, if the year is evenly divisible by 100, it is not a leap year, unless it is also evenly divisible by 400. In that case, it is a leap year.

//Meaning of divisible? - When a number is divided by another number and there is no remainder, the first number is said to be divisible by the second number.
//Which year is a leap year when year % 400 === 0? 2000, 2400, 2800... How? Let's consider if 2000/400 = 5, remainder is 0, so 2000 is divisible by 400, hence it is a leap year. Similarly, 2400/400 = 6, remainder is 0, so 2400 is divisible by 400, hence it is a leap year. And 2800/400 = 7, remainder is 0, so 2800 is divisible by 400, hence it is a leap year.



