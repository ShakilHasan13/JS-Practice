//Async await>>>Promises chain>>> Callback hell 
//Async await is better than promises chain and promises chain is better than callback

//Syncronas programming means maintaining the sequence line by line
/*console.log("Line 1");
console.log("Line 2");
console.log("Line 3");*/
//it will execute line by line. If there's any task to delay, the 
//another lines won't work until that particular line is executed.
 
//Let's talk about the setTimeOut() function which basically takes 
//2 parameters. One is the value and the another is the delay of the execution
/*setTimeout(()=>{
    console.log("hello")
}, 3000) //3s= 3000ms
console.log("Line 4");*/
//setTimeout won't make delay for the line 4. This is asyncronas programming.


//Callback:
//Callback is a function passed as an argument in a function.
//callback must not pass with the parenthesis. Cuz then, it won't work.


//Callback Hell:
//Nested callback when becomes too difficult 

/*function getData(dataId){
    setTimeout(()=>
    {
        console.log("Data", dataId);
    }, 2000
    )
}*/
//Now let's suppose we need a code where 
//after 3 second data1 will come, then data2 will come after
//3 seconds etc..
/*function myData(num, getNextData){
    setTimeout(()=>{
        console.log("Data", num);
        if(getNextData){
            getNextData();
        }
    }, 3000)
}
myData(1, ()=>{
    myData(2, ()=>{
        myData(3);
    });
}); */
//Basically the above code is little bit difficult to understand.
//That's why it is called Callback hell. To solve the issue here
//comes the promises.

//Promises
//Promises is for eventual completion of task.It's an object in JS. It's a solution
//to callback hell
//let promise= new Promise((resolve, reject)=>{...})
//There's the function with 2 handlers. 
/*let promise=new Promise((resolve, reject)=>{
    console.log("I am Promise");
//Promises have 3 stages: Pending, Fullfilled/resolved, Rejected
    resolve("Success"); //It will print Success and the promise object will have resolved
    //We can show error by reject("Some error occoured")
})*/
//Promises are callback created by JS
//Normally Promises are not used like this is programming.
//Basically the APIs send response like promises and we need to handle it. 

//Now, how to use a promise which will be coming from an API
// Answer: By using  .then() and .catch()
//promise.then((res)=>{...})
//promise.catch((err)=>{...})
//Now, take an example of Promise handling. Suppose the following data is from API:

/*const getPromise= ()=>{
     return new Promise((resolve, reject)=>{
        console.log("I am the Promise");
        resolve("Success");
     })
}
//Now, let's call the function getPromise
let promise= getPromise(); //It will call the promise also
//Now we have the promise. Now let's handle it.
promise.then((res)=>{
    console.log("Promise Got");
}) */


//Promise Chain:It's basically just like the Callback hell. Meaning: inside the
//then(), there will be another then(). It looks like Nesting. 

//Let's suppose we need to write a program:
//Which will have a promise from an API, then there will be 
//Fetching data1..
//Data1
//After that, Fetching data2....
//Data2

//let's have a promise from an API:

/*const getPromise1=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("Success!");
        }, 4000)
    })
}

const getPromise2=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Success!");
        }, 4000)
    })
}*/

// console.log("Fetching Data 1...");
// let p1=getPromise1(); //we can write: getPromise1.then() directly. 

// p1.then((res)=>{
//     console.log(res);
//     let p2=getPromise2(); //we can write: getPromise2.then() directly. 
//     console.log("Fetching Data2...")
//     p2.then((res)=>{
//         console.log(res);
//     })
// })


//Better way to do Promise chaining:
/*getPromise1().then((res)=>{
    return getPromise2((res)=>{
        console.log(res);
    })
}) */ //the chain can be bigger and bigger...


//Async-Await:
// async function always returns a promise
//async function myFunction(){...}
//await pauses execution of its's surroundering async function until the promise
//is settled

//Let's have an example:
function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data", dataId);
            resolve("Success!");
        }, 3000);
        
    }
)
}
async function getAllData(){
    console.log("Fetching Data 1..");
    await getData(1);
    console.log("Fetching Data 2..");
    await getData(2);
    console.log("Fetching Data 3..");
    await getData(3);
    console.log("Fetching Data 4..");
    await getData(4);
}

getAllData();


//IIFE
//Immediate Invoked Function Expression
//This concept is used when we want that: we won't want to unnessarily call the 
//function like getAllData().
//But the problem is: It can be used only one time.

//Now do it: 
// (async function (){
//     console.log("Fetching Data 1..");
//     await getData(1);
//     console.log("Fetching Data 2..");
//     await getData(2);
//     console.log("Fetching Data 3..");
//     await getData(3);
//     console.log("Fetching Data 4..");
//     await getData(4);
// })()
//This is the syntax of the IIFE. The code helps us to execute the function
//automatically without calling it. But it can't be used only one time.
