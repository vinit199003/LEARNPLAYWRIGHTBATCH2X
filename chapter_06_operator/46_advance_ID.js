let a = 10;
console.log( ++a + a );// 22: 11 + 11 Explanation:
// ++a: pre-increment, value of a becomes 11, returns 11
// a: current value of a is 11, returns 11
// So the expression is 11 + 11 = 22
console.log( a ); // 11 because after the previous operation, a was incremented to 11.

let b = 10;
console.log( b++ + ++b );// 22: 10 + 12 Explanation:
// b++: post-increment, returns 10, then b becomes 11
// ++b: pre-increment, b becomes 12, returns 12
// So the expression is 10 + 12 = 22
console.log( b ); // 12 because after the previous operation, b was incremented to 12.

let c = 10;
console.log( c++ + c++ );// 21: 10 + 11 Explanation:
// c++: post-increment, returns 10, then c becomes 11
// c++: post-increment, returns 11, then c becomes 12
// So the expression is 10 + 11 = 21
console.log( c ); // 12 because after the previous operation, c was incremented to 12.

let d = 10;
console.log( ++d + d++ );// 22: 11 + 11 Explanation:
// ++d: pre-increment, value of d becomes 11, returns 11
// d++: post-increment, returns 11, then d becomes 12
// So the expression is 11 + 11 = 22
console.log( d ); // 12 because after the previous operation, d was incremented to 12.

let e = 10;
console.log( e++ + ++e );// 22: 10 + 12 Explanation:
// e++: post-increment, returns 10, then e becomes 11
// ++e: pre-increment, e becomes 12, returns 12
// So the expression is 10 + 12 = 22
console.log( e ); // 12 because after the previous operation, e was incremented to 12.

let f = 10;
console.log( ++f + f++ );// 22: 11 + 11 Explanation:
// ++f: pre-increment, value of f becomes 11, returns 11
// f++: post-increment, returns 11, then f becomes 12
// So the expression is 11 + 11 = 22
console.log( f ); // 12 because after the previous operation, f was incremented to 12.

let g = 10;
console.log( ++g + ++g );// 23: 11 + 12 Explanation:
// ++g: pre-increment, value of g becomes 11, returns 11
// ++g: pre-increment, value of g becomes 12, returns 12
// So the expression is 11 + 12 = 23
console.log( g ); // 12 because after the previous operation, g was incremented to 12.

let h = 10;
console.log( h++ + h++ );// 21: 10 + 11 Explanation:
// h++: post-increment, returns 10, then h becomes 11
// h++: post-increment, returns 11, then h becomes 12
// So the expression is 10 + 11 = 21
console.log( h ); // 12 because after the previous operation, h was incremented to 12.

let i = 10;
console.log( ++i + i++ );// 22: 11 + 11 Explanation:
// ++i: pre-increment, value of i becomes 11, returns 11
// i++: post-increment, returns 11, then i becomes 12
// So the expression is 11 + 11 = 22
console.log( i ); // 12 because after the previous operation, i was incremented to 12.

//ERT table for the above expressions:
// | Expression          | Value of a | Value of b | Result | ERT    |
// |---------------------|------------|------------|--------|--------|
// | ++a + a             | 11         | 11         | 22     | number |
// | b++ + ++b           | 12         | 12         | 22     | number |
// | c++ + c++           | 12         | 12         | 21     | number |
// | ++d + d++           | 12         | 12         | 22     | number |
// | e++ + ++e           | 12         | 12         | 22     | number |
// | ++f + f++           | 12         | 12         | 22     | number |
// | ++g + ++g           | 12         | 12         | 23     | number |
// | h++ + h++           | 12         | 12         | 21     | number |
// | ++i + i++           | 12         | 12         | 22     | number |

//Add same expample with decrement operator and explain the output of each expression and also generate the ERT table for the same.

let j = 10;
console.log( --j + j ); // 19: 9 + 10 Explanation:
// --j: pre-decrement, value of j becomes 9, returns 9
// j: current value of j is 10, returns 10
// So the expression is 9 + 10 = 19
console.log( j ); // 9 because after the previous operation, j was decremented to 9.

let k = 10;
console.log( k-- + --k ); // 19: 10 + 9 Explanation:
// k--: post-decrement, returns 10, then k becomes 9
// --k: pre-decrement, value of k becomes 8, returns 8
// So the expression is 10 + 9 = 19
console.log( k ); // 8 because after the previous operation, k was decremented to 8.

let l = 10;
console.log( --l + l-- );
// 19: 9 + 10 Explanation:
// --l: pre-decrement, value of l becomes 9, returns 9
// l--: post-decrement, returns 10, then l becomes 9
// So the expression is 9 + 10 = 19
console.log( l ); // 9 because after the previous operation, l was decremented to 9.

let m = 10;
console.log( m-- + --m ); // 19: 10 + 9 Explanation:
// m--: post-decrement, returns 10, then m becomes 9
// --m: pre-decrement, value of m becomes 8, returns 8
// So the expression is 10 + 9 = 19
console.log( m ); // 8 because after the previous operation, m was decremented to 8.

//ERT table for the above decrement expressions:
// | Expression          | Value of j | Value of k | Result | ERT    |
// |---------------------|------------|------------|--------|--------|
// | --j + j             | 9          | 10         | 19     | number |
// | k-- + --k           | 8          | 9          | 19     | number |
// | --l + l--           | 9          | 10         | 19     | number |
// | m-- + --m           | 8          | 9          | 19     | number |
//Note: The ERT table for decrement expressions shows the final values of the variables after the operations, as well as the result of the expression and its type (number).

let n = 5;
console.log( n++ + n-- ); // 10: 5 + 5 Explanation:
// n++: post-increment, returns 5, then n becomes 6
// n--: post-decrement, returns 6, then n becomes 5
// So the expression is 5 + 5 = 10
console.log( n ); // 5 because after the previous operation, n was incremented to 6 and then decremented back to 5.

let o = 5;
console.log( ++o + --o ); // 10: 6 + 5 Explanation:
// ++o: pre-increment, value of o becomes 6, returns 6
// --o: pre-decrement, value of o becomes 5, returns 5
// So the expression is 6 + 5 = 10
console.log( o ); // 5 because after the previous operation, o was incremented to 6 and then decremented back to 5.

let p = 5;
console.log( p-- + ++p ); // 10: 5 + 5 Explanation:
// p--: post-decrement, returns 5, then p becomes 4
// ++p: pre-increment, value of p becomes 5, returns 5
// So the expression is 5 + 5 = 10
console.log( p ); // 5 because after the previous operation, p was decremented to 4 and then incremented back to 5.

let q = 5;
console.log( --q + q++ ); // 10: 4 + 6 Explanation:
// --q: pre-decrement, value of q becomes 4, returns 4
// q++: post-increment, returns 4, then q becomes 5
// So the expression is 4 + 6 = 10
console.log( q ); // 5 because after the previous operation, q was decremented to 4 and then incremented back to 5.

let z = 5;
console.log( z++ + ++z - --z + z-- + ++z ); // 25: 5 + 7 - 6 + 6 + 6 Explanation:
// z++: post-increment, returns 5, then z becomes 6
// ++z: pre-increment, value of z becomes 7, returns 7
// --z: pre-decrement, value of z becomes 6, returns 6
// z--: post-decrement, returns 6, then z becomes 5
// ++z: pre-increment, value of z becomes 6, returns 6
// So the expression is 5 + 7 - 6 + 6 + 6 = 25
// The "7" in the explanation was a mistake. The correct evaluation is 5 + 7 - 6 + 6 + 6 = 25.
// Let's break it down step by step:
// 1. `z++`: This is a post-increment operation. It returns the current value of `z`, which is 5, and then increments `z` to 6.
// 2. `++z`: This is a pre-increment operation. It increments `z` from 6 to 7 and returns 7.
// 3. `--z`: This is a pre-decrement operation. It decrements `z` from 7 to 6 and returns 6.
// 4. `z--`: This is a post-decrement operation. It returns the current value of `z`, which is 6, and then decrements `z` to 5.
// 5. `++z`: This is a pre-increment operation. It increments `z` from 5 to 6 and returns 6.
// Now, substituting these values back into the expression, we get:
// 5 (from `z++`) + 7 (from `++z`) - 6 (from `--z`) + 6 (from `z--`) + 6 (from `++z`)
// This simplifies to:
// 5 + 7 - 6 + 6 + 6 = 25
console.log( z ); // 6 because after the previous operation, z was incremented to 6.
console.log( z++ + ++z - --z + z-- + ++z ); // 25: 6 + 8 - 7 + 7 + 7 Explanation:
// z++: post-increment, returns 6, then z becomes 7
// ++z: pre-increment, value of z becomes 8, returns 8
// --z: pre-decrement, value of z becomes 7, returns 7
// z--: post-decrement, returns 7, then z becomes 6
// ++z: pre-increment, value of z becomes 7, returns 7
// So the expression is 6 + 8 - 7 + 7 + 7 = 25
console.log( z ); // 7 because after the previous operation, z was incremented to 7.