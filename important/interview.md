# Lexical Scope vs Closure (Hinglish)

## Sabse pehle ek line me difference

### Lexical Scope

> **Lexical Scope batata hai ki ek function kis variable ko access kar sakta hai.**

### Closure

> **Closure batata hai ki function un variables ko future me bhi yaad rakhega, chahe outer function execute hoke finish ho gaya ho.**

---

# Lexical Scope Example

```javascript
let company = "Google";

function outer() {
    let name = "Vishesh";
    function inner() {
        console.log(name);
        console.log(company);
    }

    inner();
}

outer();
```

### Output

```
Vishesh
Google
```

### Dry Run

```
inner()

↓

name mila?
✔ Yes

↓

company mila?
✔ Global se mil gaya
```

JavaScript scope chain follow karta hai.

Search order:

```
Current Scope

↓

Outer Scope

↓

Global Scope
```

Isko **Lexical Scope** kehte hain.

**Important:**

Yahan `outer()` ke execute hote hi `inner()` bhi execute ho gaya.

Outer function finish hone ke baad kisi variable ko yaad rakhne ki zarurat nahi hai.

---

# Closure Example

```javascript
function outer() {

    let name = "Vishesh";

    return function () {
        console.log(name);
    };

}

const greet = outer();

greet();
```

### Output

```
Vishesh
```

### Dry Run

Step 1

```
outer()

↓

name = "Vishesh"
```

Step 2

```
return inner function
```

Ab normally

```
outer()

↓

finish

↓

name destroy hona chahiye
```

Lekin JavaScript dekhta hai

```
Inner function abhi bhi "name" use karega.

↓

Delete mat karo.

↓

Closure bana do.
```

Ab jab

```javascript
greet();
```

execute hota hai

```
Vishesh
```

print hota hai.

Ye **Closure** hai.

---

# Visual Difference

## Lexical Scope

```
Global

↓

Outer

↓

Inner
```

Question:

```
Main kis variable ko access kar sakta hu?
```

---

## Closure

```
Outer finish

↓

Inner function abhi bhi alive

↓

Outer variables memory me preserve
```

Question:

```
Outer variables ko future me kaise yaad rakhu?
```

---

# Real Life Analogy

## Lexical Scope

Socho tum ek ghar me ho.

```
Room

↓

Hall

↓

Terrace
```

Tum apne room se hall aur terrace dekh sakte ho.

Ye **Lexical Scope** hai.

---

## Closure

Ab maan lo tum ghar se bahar aa gaye.

Lekin tumhare phone me ghar ki chabi ka digital access hai.

Ab bhi tum ghar khol sakte ho.

Ye **Closure** hai.

---

# Difference Table

| Lexical Scope                  | Closure                                               |
| ------------------------------ | ----------------------------------------------------- |
| Variables kaha accessible hain | Variables ko future ke liye remember karta hai        |
| Scope chain define karta hai   | Scope ko preserve karta hai                           |
| Compile/creation time concept  | Runtime behavior                                      |
| Har function me hota hai       | Sirf jab inner function outer variables use karta hai |
| Variables search karta hai     | Variables ko memory me alive rakhta hai               |

---

# Interview Question

```javascript
let x = 100;

function outer() {

    let y = 20;

    function inner() {
        console.log(x);
        console.log(y);
    }

    return inner;
}

const fn = outer();

fn();
```

### Lexical Scope

```
inner

↓

outer

↓

global
```

Isi order me variables search honge.

### Closure

`outer()` finish hone ke baad bhi

```
y = 20
```

memory me bacha rahega.

Kyun?

Kyunki

```
fn()
```

abhi bhi use karega.

---

# Easy Trick (Interviews)

**Lexical Scope**

> "Function variable ko kahan se access karega?"

**Closure**

> "Function un variables ko future me kaise yaad rakhega?"

---

# 30-Second Interview Answer

> **Lexical Scope defines where a function can access variables based on where it is written in the source code. Closure is a runtime feature where an inner function remembers and can access variables from its outer lexical scope even after the outer function has finished executing. In simple words, lexical scope decides variable accessibility, while closure preserves those variables for future use.**
