console.log( "" == "0" ); // false loose comparison, both operands are strings, so no type coercion occurs and they are not equal (Transitively broken, because "" is falsy and "0" is truthy, but they are not equal as strings)

/*#### The Core Difference
- ===  **(strict equality)** — checks **both value AND type**. No conversion.
- `**==**`  **(loose equality)** — checks **value only**, after converting both sides to the same type (type coercion).


## Transitivity broken
```
"" == 0      // true  → "" → Number("") → 0, 0 == 0
"0" == 0     // true  → "0" → Number("0") → 0, 0 == 0
"" == "0"    // false → both strings, compared as-is
```
If `==` transitive: `a==b && b==c` → `a==c`. Here `"" == 0` and `0 == "0"` both true, but `"" == "0"` false. Broken.



## Why
`==` algorithm branch on types:

- string vs number → coerce string to number
- string vs string → byte compare, no coercion
- `Number("")`  = 0, `Number("0")`  = 0 — but that path never runs when both sides already strings
*/

console.log( 0 == false ); // true loose comparison, type coercion converts false to 0 before comparison
console.log( 0 === false ); // false strict comparison, 0 is a number and false is a boolean, so they are of different types

cosnsole.log( null == 0 ); // false loose comparison, null is only loosely equal to undefined, not to 0
console.log( null === 0 ); // false strict comparison, null is of type object and 0 is of type number, so they are of different types

cosnsole.log( null == undefined ); // true loose comparison, null and undefined are considered equal in loose comparison
console.log( null === undefined ); // false strict comparison, null and undefined are of different types