// Examples of valid identifiers
var myVar = 1;           // starts with a letter
var _myVar = 2;          // starts with underscore
var $myVar = 3;          // starts with dollar sign
var myVar2 = 4;          // can contain numbers (not at start)
var имя = 5;             // Unicode letters allowed

// Valid identifiers with let
let myLetVar = 11;
let _letVar = 12;
let $letVar = 13;
let letVar2 = 14;
let имяLet = 15;

// Invalid identifiers with let (uncommenting will cause errors)
// let 2letVar = 16;     // cannot start with a digit
// let let = 17;         // cannot use reserved keyword
// let my-Let = 18;      // hyphens not allowed

// Case sensitivity with let
let mylet = 19;
let myLetCase = 20;
console.log(myLetVar, _letVar, $letVar, letVar2, имяLet, mylet, myLetCase);

// Examples of invalid identifiers (uncommenting these will cause errors)
// var 2myVar = 6;       // cannot start with a digit
// var var = 7;          // cannot use reserved keyword
// var my-Var = 8;       // hyphens not allowed

// Case sensitivity
var myvar = 9;
var myVarCase = 10;
console.log(myVar, _myVar, $myVar, myVar2, имя, myvar, myVarCase);
