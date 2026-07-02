

// in this for loop are used in it.
const person = {
    name : "Vishesh",
    class : "6th semester",
    rollno : 24
}

for(let x in person){
    // here x is key like -> name , class , roll no
    // now when we want to access key value
    // now person[name] -> vishesh
    // person[class] -> 6th semester
    //person[rollno] -> 24
    console.log(person[x])
}

// in array
let arr = [10 , 29 , 39, 45];
for(let x in arr){
    console.log(arr[x]);
}

arr.forEach((val , index) => {
    console.log(index , val)
}) 

const alpha = ['a' , 'b' , 'c'];

for(let x in alpha){
    console.log(alpha[x]);
}

alpha.forEach((val , idx) => {
    console.log(idx , val);
})

// for of loop
let arrays = ['a' , 'b' , 'c'];
for(let item of arrays){
    console.log(item);
}

const str = 'hello';
for(let ch of str){
    console.log(ch);
}

