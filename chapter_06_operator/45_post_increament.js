let a = 10;
let b = a++;
console.log( a );// 11: a is incremented to 11
console.log( b ); // 10: b is assigned the value of a before incrementing
//Explain how the value of a is incremented to 11: The value of 'a' is incremented to 11 because the post-increment operator (a++) increases the value of 'a' by 1 after it is assigned to 'b'. Therefore, 'a' becomes 11, and 'b' is assigned the value of 10, which was the original value of 'a' before the increment.

//ERT table line by line with above example
// | Expression | Value of a | Value of b | Result | ERT |
// |------------|------------|------------|--------|--------|
// | a++        | 10         | 10         | 10     | number |
// | a          | 11         | 10         | 11     | number |
