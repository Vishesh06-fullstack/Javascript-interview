// "use strict";

function greet() {
    console.log(this);
}

greet();


function Student(name) {
    this.name = name;
}

const s1 = new Student("Vishesh");
console.log(s1.name);

const person = {
    name: "Vishesh",
    greet() {
        console.log(this.name);
    }
};

person.greet();
const persons = {
    name: "Vishesh",
    greet : () => {
        console.log(this.name);
    }
};

persons.greet();


