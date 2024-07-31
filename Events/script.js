//Mode changing JS

/*let btn=document.querySelector("button");
let mode=document.querySelector(".mode");
let body=document.querySelector("body");


let currentMode="light";

btn.addEventListener("click", ()=>{
    if(currentMode=="light"){
        currentMode="dark";
        //এভাবেও করা যাইতোঃ document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");
        
    } else{
        currentMode="light";
        // এভাবেও করা যাইতো ঃ document.querySelector("body").style.backgroundColor="White";
        body.classList.add("light");
        body.classList.remove("dark");

    } ;
    console.log(currentMode);
    }
)
    */

//Mouse hover করলে স্ক্রিনের লেখা চেন্স হয়ে যাবে

// let oldText=document.querySelector(".oldText");
// let hoverBtn=document.querySelector("button");


// hoverBtn.addEventListener("mouseover", ()=>{
//     oldText.innerText="Hi, I am new Text";

// })

//Set a button to print "Happy Birthday, Shakil" if anyone press 22 July

// let wish=document.querySelector(".wish");
// let bddate=document.querySelectorAll(".bddate");

// bddate[0].style.visibility="hidden";
// bddate[1].style.visibility="hidden";
// bddate[2].style.visibility="hidden";

// wish.addEventListener("click", ()=>{
//     bddate[0].style.visibility="visible";
//     bddate[1].style.visibility="visible";
//     bddate[2].style.visibility="visible"; 
// })

// bddate[0].addEventListener("click", ()=>{
//     console.log("Happy Birthday, Shakil!");
// })
// bddate[1].addEventListener("click", ()=>{
//     console.log("You are not my good friend ):");
// })
// bddate[2].addEventListener("click", ()=>{
//     console.log("You are not my good friend ):");
// })

//Create and remove an eventlistener from a JS file

// let btn=document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     console.log("Button clicked");
// })

// const clicked= ()=>{
//     console.log("Clicked");
// }

// btn.addEventListener("click", clicked);
// btn.removeEventListener("click", clicked);

//Print the Event Object in the console.

// let btn=document.querySelector("button");
// btn.addEventListener("click", (evt)=>{
//     console.log(evt.clientX, evt.clientY);
//     console.log(evt.target, evt.type);
// })