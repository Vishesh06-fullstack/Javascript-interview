function outer(){
    let name = "Vishesh";

    function inner(){
        console.log(name);
    }
    return inner;
}

console.log(outer)
const greet = outer();
// console.log(greet());
greet();
console.log(greet)
outer();
// console.log(outer()())

