
//interview - level 

let p = 10;
function test(){
    let name = "Vishesh"

    function test1(){
        console.log(name);
    }
    return test1;
}

let a = test();
console.log(test);
console.log(a)
a()

// function hello(){
//     console.log("hi");
// }
// let x = hello;
// x();


let x = 10;
function outer() {
    let y = 20;
    function inner() {
        console.log(x);
        console.log(y);
    }
    inner();
}

const outerr = outer();
console.log(outer)

// let x = 100;

// function outer() {

//     let x = 10;

//     return function () {
//         console.log(x);
//     }

// }

// const fn = outer();

// x = 200;

// fn();