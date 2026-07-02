const numbers = [1 , 2 , 3 , 4 , 5];

//map
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

//filter
const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

//reduce
const sum = numbers.reduce((acc , curr) => acc + curr , 0);
console.log(sum);

//find
const found = numbers.find((num) => num > 3);
console.log(found);


const person = { // object destructuring
 name : "Alice",
age : 25,   
}

const {name , age} = person;
console.log(name)
console.log(age)


//Array destructuring
const colors = ["red" , "green" , "blue"];
const[first , second , third] = colors;
console.log(first);
console.log(second);
console.log(third);

// 
function greet({name , age}){
    console.log(`Hello ${name} , you are ${age} years old`);
}

greet(person);

//spread and rest operator
const arr1 = [1 , 2, 3];
const arr2 = [...arr1 , 4 , 5];
console.log(arr2);

const obj1 = {a : 1};
const obj2 = {...obj1 , b : 2};
console.log(obj2);


// rest operator multiple value ko ek saath mai calculate karna


function sumAll(...numbers){
    // return numbers.reduce((acc , curr) => acc + curr , 0);
    // console.log(numbers);
    return numbers.reduce((acc , curr) => acc * curr , 1) ;
}
console.log(sumAll(1, 2, 3, 4, 5));




//
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 45 },
    { name: "Priya", marks: 92 }
];


const num = [1 , 2, 3 , 4 , 5];

console.log(students);
const passed = students.filter((student) => student.marks >= 50);
const arrayNum = num.filter((num) => num % 2 != 0);
const arrayNums = num.find((num) => num % 2 != 0);
console.log(passed);
console.log(arrayNum);
console.log(arrayNums);


const ages = 20;
const message = ages >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"



