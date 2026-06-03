const baseURL = "https://www.google.com/"; // const variable must be initialized at the time of declaration.
// const variable cannot be reassigned a new value. It is read-only and cannot be changed after it has been assigned.
baseURL = "https://www.facebook.com/"; // TypeError: Assignment to constant variable.

// const variable is block scoped, which means that it is only accessible within the block in which it is declared. This can help prevent unintended consequences and make code easier to understand.

//compariosn table for var, let and const
//| Feature           | var             | let             | const           |
//|-------------------|-----------------|-----------------|-----------------|
//| Scope             | Function-scoped | Block-scoped    | Block-scoped    |
//| Redeclaration     | Allowed         | Not allowed     | Not allowed     |
//| Reassignment     | Allowed         | Allowed         | Not allowed     |
//| Hoisting         | Yes             | Yes (not initialized) | Yes (not initialized) |
//| Temporal Dead Zone | No              | Yes             | Yes             |
//must be initialized at the time of declaration. | No              | No              | Yes             |
//accessible before declaration | Yes (undefined) | No (ReferenceError) | No (ReferenceError) |
//object/array mutation | Allowed         | Allowed         | Allowed         |
//reassignment of object/array | Allowed         | Allowed         | Not allowed     |
//recommended for use | No              | Yes             | Yes             |