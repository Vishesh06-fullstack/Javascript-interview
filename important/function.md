# JavaScript Function vs Arrow Function (Interview + Hinglish)

# 1. What is a Function?

A function is a reusable block of code that performs a specific task.

### Function Declaration

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Vishesh"));
```

Output

```
Hello Vishesh
```

---

# 2. What is an Arrow Function?

Arrow function is a shorter syntax introduced in ES6 to write functions.

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("Vishesh"));
```

Output

```
Hello Vishesh
```

---

# 3. Short Syntax

cnIf there is only one statement, return can be omitted.

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

Output

```
30
```

Internally

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# 4. Function Declaration vs Function Expression vs Arrow Function

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Hoisted completely.

---

## Function Expression

```javascript
const greet = function () {
    console.log("Hello");
};
```

Not callable before declaration.

---

## Arrow Function

```javascript
const greet = () => {
    console.log("Hello");
};
```

Not callable before declaration.

---

# 5. Hoisting

## Function Declaration

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output

```
Hello
```

Reason

Entire function is hoisted.

---

## Arrow Function

```javascript
sayHello();

const sayHello = () => {
    console.log("Hello");
};
```

Output

```
ReferenceError
```

Reason

Arrow function is assigned to a `const`. `const` is hoisted but stays in the Temporal Dead Zone (TDZ) until initialization.

---

# 6. 'this' Keyword (Most Important Interview Question)

## Normal Function

```javascript
const person = {
    name: "Vishesh",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();
```

Output

```
Vishesh
```

Reason

In a normal function, `this` depends on **how the function is called**. Here it is called as `person.greet()`, so `this` refers to `person`.

---

## Arrow Function

```javascript
const person = {
    name: "Vishesh",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();
```

Output

```
undefined
```

Reason

Arrow functions **do not have their own ****`this`**. They use the `this` value from the surrounding (lexical) scope.

---

# 7. Lexical this

```javascript
function Person() {
    this.name = "Vishesh";

    setTimeout(() => {
        console.log(this.name);
    }, 1000);

}

new Person();
```

Output

```
Vishesh
```

Reason

The arrow function takes `this` from the surrounding `Person` function.

---

# 8. arguments Object

## Normal Function

```javascript
function test() {
    console.log(arguments);
}

test(1, 2, 3);
```

Output

```
Arguments(3) [1, 2, 3]
```

Normal functions have their own `arguments` object.

---

## Arrow Function

```javascript
const test = () => {
    console.log(arguments);
};

test(1, 2, 3);
```

Output

```
ReferenceError
```

Arrow functions do **not** have their own `arguments` object.

Use the rest operator instead:

```javascript
const test = (...args) => {
    console.log(args);
};

test(1, 2, 3);
```

Output

```
[1, 2, 3]
```

---

# 9. Constructor

## Normal Function

```javascript
function Person(name) {
    this.name = name;
}

const p = new Person("Vishesh");

console.log(p.name);
```

Output

```
Vishesh
```

---

## Arrow Function

```javascript
const Person = (name) => {
    this.name = name;
};

const p = new Person("Vishesh");
```

Output

```
TypeError: Person is not a constructor
```

Reason

Arrow functions cannot be used with `new`.

---

# 10. Prototype

Normal functions have a `prototype`.

```javascript
function test() {}

console.log(test.prototype);
```

Arrow functions do not have a `prototype`.

```javascript
const test = () => {};

console.log(test.prototype);
```

Output

```
undefined
```

---

# 11. Implicit Return

```javascript
const square = x => x * x;

console.log(square(5));
```

Output

```
25
```

Equivalent to

```javascript
const square = (x) => {
    return x * x;
};
```

---

# 12. Returning an Object

Wrong

```javascript
const user = () => {
    name: "Vishesh";
};
```

Output

```
undefined
```

Correct

```javascript
const user = () => ({
    name: "Vishesh"
});

console.log(user());
```

Output

```
{ name: "Vishesh" }
```

---

# Function vs Arrow Function

| Feature     | Function                                | Arrow Function                          |
| ----------- | --------------------------------------- | --------------------------------------- |
| Syntax      | Longer                                  | Shorter                                 |
| Hoisting    | Function declarations are fully hoisted | Depends on variable (`let`/`const` TDZ) |
| `this`      | Own `this` based on call site           | Lexical `this`                          |
| `arguments` | Available                               | Not available                           |
| Constructor | Yes (`new`)                             | No                                      |
| Prototype   | Yes                                     | No                                      |
| Best Use    | Object methods, constructors            | Callbacks, array methods, async code    |

---

# When to Use What?

### Use Normal Functions

* Object methods
* Constructors
* When you need your own `this`
* When using `arguments`

### Use Arrow Functions

* Callbacks
* `map()`
* `filter()`
* `reduce()`
* `setTimeout()`
* Promise callbacks
* Async/Await callbacks

---

# Interview Questions

## Q1. Difference between function and arrow function?

**Answer:**

* Arrow functions have lexical `this`.
* They don't have their own `arguments`.
* They can't be used as constructors.
* They don't have a `prototype`.
* Function declarations are hoisted completely, while arrow functions depend on their variable declaration.

---

## Q2. Why does an arrow function print `undefined` for `this.name`?

**Answer:**

Because arrow functions don't create their own `this`. They inherit `this` from the surrounding lexical scope.

---

## Q3. Can we use `new` with an arrow function?

**Answer:**

No. Arrow functions are not constructors.

---

## Q4. Do arrow functions have `arguments`?

**Answer:**

No. Use the rest operator (`...args`) instead.

---

# 30-Second Interview Answer

> **Arrow functions are a shorter ES6 syntax for writing functions. Unlike normal functions, they do not have their own ****`this`****, ****`arguments`****, ****`prototype`****, or constructor behavior. They inherit ****`this`**** from the surrounding lexical scope, making them ideal for callbacks and asynchronous code. Normal functions are better suited for object methods and constructors where dynamic ****`this`**** is required.**
