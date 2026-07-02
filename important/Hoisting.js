console.log(a);
var a = 10;
console.log(a)

console.log("error comes here")

console.log(b);
let b = 10;
console.log(b);




// internally in javascript it looks like
// var a;          // declaration is hoisted
// console.log(a); // undefined
// a = 10;         // initialization stays here
// console.log(a); // 10

console.log(name);
var name = "shreya";
console.log(name);

// var name
// console.log(name) -> undefined
// name = "shreya"
//console.log(name) -> shreya

// function hositing
sayHello();

function sayHello(){
    console.log("hello vishesh");
}

//internally its like this 
function sayNello(){
    console.log('hi varun');
}

sayNello();

//

// sayPello();
// var sayPello = () => {
//     console.log("Hello");
// };

// hoisitng var sayHello -> undefined
// var sayPello() ->
// sayPello(); -> it is here undefined -> undefined();
// error -> sayhello is not a function
// sayPello = () => {
    // console.log(hello)
    // }


 gfg2();
    console.log(gfg2);
    var input1 = 8;
    var gfg2 = () => {
        console.log("function calling");
}