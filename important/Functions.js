// function
function greet(name){
    return `Hello ${name}`
}
console.log(greet("Vishesh"))

// arrow function

const welcome = (name) => {
    return `Welcome ${name}`
}
console.log(welcome("vishesh"))


const person = {
    name: "Vishesh",
    greet: () => {
        console.log(this.name);
    }
};

person.greet();

function Persons(){
    this.name = "Vishesh";

    setTimeout(() => {
        console.log(this.name)
    }, 1000)
}

new Persons();

// argument object 
function test() {
    console.log(arguments);
}

test(1, 2, 3);

// rest operator in arrow function for argument as it is does have their own argument objects
const test2 = (...args) => {
    console.log(args);
};

test2(1, 2, 3);

//
function per(name) {
    this.name = name;
}




const p = new per("raj");
const q = new per("kishan")

console.log(p.name);
console.log(q.name);
console.log(p == q);


// function test3() {
//     let name = "vishesh"
//     start : () => {
//         console.log('start');
//     }
// }

// console.log(test3.prototype);

