// synchronous
console.log("1");
console.log("2");
console.log("3")

// asynchronous
console.log("1");
console.log("2 is gonna be print")
setTimeout(() => console.log("2") , 2000);

console.log("3");


// async await
// function greet(){
//     return "Hello";
// }
// console.log(greet);
// greet();

async function greet() {
    return "Hello";
}

setTimeout(() => {
    greet().then(val => console.log(val))
},3000)


function saySome(val){
    this.val = val;
}

const p1 = new saySome("Vishesh");

//p1 yha object bna toh , uss object mai val naam ki property bana do.
console.log(p1.val);

console.log(this)


function fetchData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Received");
        },2000);
    });
}

async function display() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

display();


// practice question

// Ek async function banao jo return kare
// Hello Avengers

async function avenger() {
    return "Hello aveneger"
}
console.log(avenger())
avenger().then((data) => console.log(data))
.catch((data) => console.log(data))

// Promise banao jo 2 second baad
//iron man

function getMarvel(){
    return new Promise((res , rej) => {
        setTimeout(() => {
            // return "Iron man";
            res("Iron man")
        } , 2000)
    })
}

// getMarvel().then((data) => console.log(data))
// .catch((data) => console.log(data))

async function ironMan(){
    try {
        const data = await getMarvel();
       console.log(data)
    } catch (error) {
        console.log(error);
    }
}
ironMan();

//Promise reject karo.
// network error

function getMar(){
    return new Promise((res , rej) => {
        rej("Network error");
    })
}

async function marv(){
    try {
         const data = await getMar();
        console.log(data);
    } catch (error) {
        console.log("Network error");
    }
}
marv();


let num = 5;

function srqNum(){
    return new Promise((resolve) => {
        resolve(num);
    })
}

async function square(){
    try {
        const data = await srqNum();
        const val =  await data * 2 + 15 ;
        console.log(val);
    } catch (error) {
        console.log(error);
    }
}

square();


async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

test();

console.log("D");

// output
//C
//D
//A
//B