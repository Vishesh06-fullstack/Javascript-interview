const promise = new Promise((resolve , reject) => {
    let success = true;
    if(success){
        resolve("data fetched successfully");
    }
    else{
        reject("Network error");
    }
});
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

//interview question

const promises = new Promise((res , rej) => {
    let success = true;

    if(success){
        res("Hello Vishesh");
    }
    else{
        rej("Error Vishesh");
    }
});

setTimeout(() => {
    promises.then((data) => {
        console.log(data);
    }).catch((data) => {
        console.log(data)
    })
} , 2000)

// Q2-> reject promises
// Ek promise banao jo reject kare.
// Expected Output
// Something went wrong

const prom = new Promise((resolve , reject) => {
    let success = false;

    if(success){
        resolve("Hi vish")
    }
    else{
        reject("Something went wrong")
    }
})

prom.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})

//Question 3: Even or Odd
// Function banao:
// checkEven(num)
// Agar number even hai to promise resolve kare.
// Agar odd hai to reject kare.

function checkEven(num){
const evenODD = new Promise((res , rej) => {
        if(num % 2 == 0){
            res("even number");
        }
        else{
            rej("odd number")
        }    
})
    return evenODD;
}

console.log(checkEven)
// checkEven(4)
// console.log(checkEven)
checkEven(4).then((data) => console.log(data))
.catch((err) => console.log(err))


// Question 4: Age Verification

function AgeVerify(num){
    const pr = new Promise((res , rej) => {
        if(num >= 18){
            res("Eligible to vote");
        }else{
            rej("Not eligible");
        }
    })
    return pr;
}
AgeVerify(7).then((data) => console.log(data))
.catch((data) => console.log(data))

// fake api

let obj = {
    id:1,
    name:"Vishesh",
    role:"Developer"
}

const pr = new Promise((res , rej) => {

    let success = true;

    if(success){
        res(obj);
    }
    else{
        rej('no obj');
    }
})

pr.then((data) => console.log(data))
.catch((data) => console.log(data))

// promise chaining
let num = 5;
const proms = new Promise((res , rej) => {
    let success = true;
    if(success){
        res(num) ;
    }
    else{
        rej(num)
    }
})

proms
.then((data)=>{
    return data*2;
})
.then((data)=>{
    return data+15;
})
.then((data)=>{
    console.log(data);
});

// delay function
function delay(ms){
    const pr = new Promise((res , rej) => {
        let success = true;
        if(success){
            setTimeout(() => {
                res("Done")
            } , ms)
        }
        else{
            rej("failure")
        }
    })
    return pr;
}

delay(2000).then((data) => console.log(data))
.catch((error) => console.log(error))


//Multiple promises
// Question 8: Multiple Promises

// Teen promises banao
// Promise 1
// Promise 2
// Promise 3
// Sab complete hone ke baad print karo
// All Promises Completed

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("foo")
    } , 100)
});

Promise.all([p1 , p2 , p3]).then((values) => {
    console.log("all promise is completed")
})

//promise.all
const promise1 = new Promise((resolve , reject) => {
    setTimeout(resolve , 100 , "foo")
})
const promise2 = new Promise((resolve , reject) => {
    setTimeout(resolve , 300 , "foob")
})

const promise3 = new Promise((resolve , reject) => {
    setTimeout(resolve , 500 , "toob");
})

Promise.race([promise1 , promise2 , promise3]).then((values) => {
    console.log(values);
}) 


//promise simulation
function timeDelay(num){

    const prom = new Promise((resolve , reject) => {
        let success = true;
       
        if(success){
            console.log("...Loading");
            setTimeout(() => {
            resolve("Data Recieved")
        } , num)
       }
       else{
        reject('data not recieved')
       }
    })
    return prom;
}

timeDelay(2000).then((data) => console.log(data))
.catch((data) => console.log(data))

//alarm 
const name = document.querySelector("#name");
const delayss = document.querySelector("#delay");
const btn = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// example for set alarm using promise use of setTimeut
function setAlarm(name , delays){
     return new Promise((resolve , reject) => {
        if(delays < 0){
            reject("Invalid delay time");
            return;
        }
        setTimeout(() => {
            resolve(`Alarm for ${name} is ringing!`);
        } , delays);
    });
};

btn.addEventListener("click" , async(event) => {
    event.preventDefault();
    const nameValue = name.value;
    const delayValue = parseInt(delay.value);

    // setAlarm(nameValue , delayValue)
    // .then((message) => {
    //     output.textContent = message;
    // })
    // .catch((error) => {
    //     output.textContent = `could not set alarm : ${error}`;
    // });

    try{
        const message = await setAlarm(nameValue , delayValue);
        output.textContent = message;
        
    }
    catch(error){
        output.textContent = `could not set alarm : ${error}`;
    }
});


// aysnc await
// async function main() {
//     try {
//         const message = await setAlarm("John", 2000);
//         console.log(message);
//     } catch (error) {
//         console.error(error);
//     }
// }
// main();
