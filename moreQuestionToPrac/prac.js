
let sum = 0
for(let i = 1 ; i <= 10 ; i++){
    sum += i;
}

console.log(sum);

//
let j = 0;
while(j <= 50){
    console.log(j);
    j += 2;
}
console.log(j)

//table

let n = 5;
for(let i = 1 ; i <= 10 ; i++){
    // console.log(n * i);
    console.log(`${n} * ${i} = ${n * i}`);
}

//factorial nikalo while loop se
let i = 1;
let fact = 1;
while(i <= 5){
    fact *= i;
    console.log(fact);
    i++;
}

let arr = "react";
for(let val of arr){
    console.log(val + "\n")
}

//map
// let p = 1;
// let fact = 1;
// while(p <= 5){
//     fact *= p;
//     console.log(fact);
//     p++;
// }

// const num = [1,2,3,4,5];
// const mapped = num.map((prod) => prod * prod);
// console.log(mapped);


console.log("vishesh".toUpperCase());
const list = ["mang" , "bann"];
const mapping = list.map((prod) => prod.toUpperCase());
console.log(mapping);

const nums = [10 , 20 , 30];
const percent = nums.map((prod) => (prod / 100) * 5);
console.log(percent);

//

const arr = [10 , 20 , 30];
const soln = arr.map((stringg) => `Numbers : ${stringg}`);
console.log(soln);

//filter
const filNum = [5 , 6, 7 , 8 , 10 , 20 , 45 , 1];
const filterSS = filNum.filter((filt) => filt > 10);
console.log(filterSS)


const frt = ["apple" , "banana" , "mango" , "kiwi"];
const filtBySS = frt.filter((fruits)  => fruits.length > 5);
console.log(filtBySS);

const named = [
    {name : "Vish" , pass : true},
    {name : "krrish" , pass : false}
]


const answer = named.filter((passOrNot) => passOrNot.pass ).map((pass) => pass.name)
console.log(answer)

// reduce method
