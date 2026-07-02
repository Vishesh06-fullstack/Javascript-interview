# JavaScript Promises & Async/Await (Interview Notes + Hinglish)

# 1. Why do we need Promises?

JavaScript is **single-threaded**.
Agar koi operation time leta hai (API call, database, file read), aur hum normal synchronous code use karein, to pura program wait karega.
Promises asynchronous operations ko handle karne ka clean aur readable way provide karte hain.

---

# 2. What is a Promise?

### Interview Definition

> **A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.**

### Hinglish

Promise ek **future value** ka promise karta hai.

Ya to:

* ✅ Success (resolve)
* ❌ Failure (reject)

---

# 3. Promise States
### 1. Pending
Operation abhi chal raha hai.
```
Promise

↓

Pending
```

---

### 2. Fulfilled

Operation successfully complete ho gaya.
```
Pending
↓
Fulfilled
↓
resolve()
```
---

### 3. Rejected
Operation fail ho gaya.
```
Pending

↓

Rejected

↓
reject()
```

---

# 4. Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Network Error");
    }

});
```

---

# 5. Consuming a Promise

```javascript
promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output
```
Data fetched successfully
```
---

# 6. Dry Run
### Step 1
```javascript
const promise = new Promise(...)
```

Promise create hua.

State:

```
Pending
```

---

### Step 2

```javascript
resolve("Data fetched successfully")
```
State
```
Fulfilled
```
---

### Step 3

```javascript
.then()
```

Ye success value receive karega.

Output

```
Data fetched successfully
```

---

# 7. reject Example

```javascript
const promise = new Promise((resolve, reject) => {

    reject("Server Error");

});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output

```
Server Error
```

---

# 8. Promise Chaining
```javascript
fetchData()
    .then((data) => {
        return processData(data);
    })
    .then((result) => {
        return saveData(result);
    })
    .then((finalData) => {
        console.log(finalData);
    })
    .catch((error) => {
        console.log(error);
    });
```

Har `.then()` ek naya Promise return karta hai.

---

# 9. Promise vs Callback
### Callback

```javascript
getUser(function(user){

    getPosts(user,function(posts){

        getComments(posts,function(comments){

        });

    });

});
```

Isko kehte hain

```
Callback Hell
```

---

### Promise

```javascript
getUser()
    .then(getPosts)
    .then(getComments)
    .catch(console.error);
```

Readable aur maintainable.

---

# 10. Async/Await

`async/await` promises ko likhne ka cleaner syntax hai.

Internally ye promises hi use karta hai.

---

# 11. async Function

```javascript
async function greet() {
    return "Hello";
}
```

Actually ye internally ban jata hai:

```javascript
function greet() {
    return Promise.resolve("Hello");
}
```

Output

```javascript
console.log(greet());
```

```
Promise { "Hello" }
```

---

# 12. await Keyword

```javascript
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data Loaded");

        }, 2000);

    });

}
```

Ab async/await

```javascript
async function getData() {

    const result = await fetchData();

    console.log(result);

}

getData();
```

Output (2 sec baad)

```
Data Loaded
```

---

# 13. Dry Run

Step 1

```javascript
getData()
```

Function execute hua.

---

Step 2

```javascript
await fetchData();
```

JavaScript promise ke resolve hone ka wait karega.

**Sirf is async function ke andar wait hota hai**, pura JavaScript program block nahi hota.

---

Step 3

2 seconds baad

```
resolve("Data Loaded")
```

---

Step 4

```javascript
console.log(result);
```

Output

```
Data Loaded
```

---

# 14. Error Handling

```javascript
async function getData() {

    try {

        const result = await fetchData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
```

`try...catch` async/await ke saath use hota hai.

---

# 15. Predict the Output

```javascript
async function test() {

    return 100;

}

test().then(console.log);
```

Output

```
100
```

Reason

`async` function hamesha Promise return karta hai.

---

# 16. Predict the Output

```javascript
async function demo() {

    console.log("A");

    await Promise.resolve();

    console.log("B");

}

console.log("C");

demo();

console.log("D");
```

Output

```
C
A
D
B
```

Reason

`await` ke baad wala code microtask queue me chala jata hai.

---

# 17. Promise.all()

```javascript
Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
])
.then((result) => {
    console.log(result);
});
```

Sab promises parallel me execute hote hain.

Agar ek bhi reject hua → pura Promise reject.

---

# 18. Promise.allSettled()

```javascript
Promise.allSettled([
    promise1,
    promise2,
    promise3
]);
```

Chahe success ho ya failure, sabka result milega.

---

# 19. Promise.race()

```javascript
Promise.race([
    promise1,
    promise2
]);
```

Jo promise sabse pehle settle hoga (resolve ya reject), uska result milega.

---

# 20. Promise.any()

```javascript
Promise.any([
    promise1,
    promise2,
    promise3
]);
```

Jo pehla **resolve** hoga uska result milega.

Agar sab reject hue to AggregateError.

---

# Promise APIs Summary

| Method               | Result                                |
| -------------------- | ------------------------------------- |
| Promise.all()        | Sab success hone chahiye              |
| Promise.allSettled() | Sabka result chahe success ho ya fail |
| Promise.race()       | Jo pehle settle ho                    |
| Promise.any()        | Jo pehle resolve ho                   |

---

# Promise vs Async/Await

| Promise                | Async/Await                              |
| ---------------------- | ---------------------------------------- |
| `.then()` use hota hai | `await` use hota hai                     |
| Chaining required      | Normal synchronous code jaisa dikhta hai |
| Readability kam        | Readability zyada                        |
| Error → `.catch()`     | Error → `try...catch`                    |

---

# Interview Questions

### Q1. Promise kya hai?

> A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

### Q2. Promise ke kitne states hote hain?

* Pending
* Fulfilled
* Rejected

---

### Q3. async function kya return karta hai?

**Always a Promise.**

---

### Q4. await kis par use hota hai?

**Promise par.**

---

### Q5. async/await internally kya use karta hai?

**Promises.**

---

### Q6. Promise aur async/await me difference?

`async/await` promises ka cleaner syntax hai. Internally dono same asynchronous mechanism use karte hain.

---

# 30-Second Interview Answer

> **Promises are used to handle asynchronous operations in JavaScript. A promise can be in one of three states: pending, fulfilled, or rejected. We handle success using `.then()` and failure using `.catch()`. Async/await is syntactic sugar built on top of promises, making asynchronous code look synchronous and easier to read. Error handling is done using `try...catch`, and async functions always return a Promise.**
