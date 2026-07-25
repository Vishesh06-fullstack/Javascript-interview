console.log("Hello, World!");


 const today = new Date().toLocaleDateString();
 console.log(today);


 const arr = [
    {id : 1 , name : "Hello"},
    {id : 2 , name : "Vivek"},
    {id : 3 , name : "shahrukh"},
    {id : 4 , name : "abhinav"},
    {id : 5 , name : "rajeev"},
 ];

console.log(arr.map(({id , name}) => name));

const ans = arr.map(({id , name} ) => ({[id]  : name}));
console.log(ans);

const ans1 = arr.map((item , index) => {
       return{
           name : item.name,
          id : item.id
       } 
       
})
console.log(ans1);


const numbers = [10, 20, 30];

const result = numbers.map((currentValue, index, originalArray) => {

  console.log(`Item: ${currentValue}, Index: ${index}, Total Items: ${originalArray.length}`);
  
  return currentValue * index; // Logic
});

console.log(result);


const p1 = {
    email : "Vishesh",
    phone : 1234
}

console.log(result);
console.log({...p1 , age : 24 , phone : 8948939});

const item = ["Hi" , "By" , "SHy"];
console.log(item);

console.log([...item , "Vishesh" , "aaaahhh"]);

const arr2 = [...item , "Vishesh" , "aaaahhh" ];
console.log(arr2[3]);

const res = arr2.map((elem  , idx) => {
    return elem;
})

console.log(res);