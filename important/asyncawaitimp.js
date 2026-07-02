function resolveAfter2s(){
    console.log("Starting slow promise")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        } , 2000)
    });
};

function resolveAfter1s(){
    console.log("Starting fast promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast");
        } , 1000);
    });
};

async function SequentiallyStart(){
    console.log("=== sequential start ===");
    const slow = resolveAfter2s();
    console.log(await slow);


    const fast = resolveAfter1s();
    console.log(await fast);
    console.log("=== sequential done === ");
}
SequentiallyStart();