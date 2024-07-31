/*create a h2 heading element with the text "Hello JS". Append "from Shakil "
th this text using JS */

// let heading= document.querySelector("h2");
// heading.innerText = heading.innerText + " from Shakil";


/*Create 3 divs with common class name "box". Access them and add some unique 
text to each of them. */

// let divs= document.querySelectorAll(".box");
// console.dir(divs[0]);
// divs[0].innerText="New Unique Value 1";
// divs[1].innerText="New Unique Value 2";
// divs[2].innerText="New Unique Value 3";
// The above code is like a beginner coder

// let i=1;
// for(a of divs){
//     divs[i-1].innerText="New Unique Value " + i;
//     i++;
// }

// for (let i=1; i<=divs.length; i++){
//     divs[i-1].innerText="New Unique Value "+ i;
//     i++;
// }
//This code isn't working properly...

/*Create a new button element. Give it a text "Click Me!", bg color of red and
text color of white.
Insert the button as the first element insite the body tag.*/

// let btn=document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// document.querySelector("body").prepend(btn);

/*Create a p tag in html, give it a class and styling. 
Now create a new class in css and try to add this class to the 
p tag using Classlist */

// let para= document.querySelector("p");
// para.getAttribute("class");
// para.classList.add("newClass");

//Let's create a joining js code
// let h1= document.querySelector("h1");
// h1.innerText=h1.innerText + " Shakil";


/* Create 5 paragraph with common class name. Access them and add some unique 
text to each of them. */
// let para= document.querySelectorAll('.para');
// console.log(para[0]);

// let i=1;
// for(p of para){
//     para[i-1].innerText="Hello " + i;
//     i++;
// }

/* Do almost everything using JS
Create a new button element. Give it a text "Click Me!", bg color of red and
text color of white.
Insert the button outside the a div tag.*/

// let button= document.createElement("button");
// button.innerText="Click Me!";
// button.style.backgroundColor="red";
// button.style.color="white";

// document.querySelector("div").after(button);


/*Create a header in html, give it a class and styling. 
Now create a new class in css and try to add this class to the */

// let addNewClass=document.querySelector("h3");
// addNewClass.getAttribute("class");
// addNewClass.classList.add("addNewClass");

//Change the styles of the h1-h6 tags, p tags, button tag and div tag

/*let h1=document.querySelector("h1");
h1.style.backgroundColor="aqua";

let h3=document.querySelector("h3");
h3.style.backgroundColor="aqua";

let h5=document.querySelector("h5");
h5.style.backgroundColor="aqua";

let h2=document.querySelector("h2");
h2.style.backgroundColor="black";

let h4=document.querySelector("h4");
h4.style.backgroundColor="black";

let h6=document.querySelector("h6");
h6.style.backgroundColor="black";

let p=document.querySelector("p");
p.style.backgroundColor="blue";
p.style.color="white";

let btn=document.querySelector("button");
btn.style.backgroundColor="blue";

let div=document.querySelector("div");
div.style.backgroundColor="black"; 
*/

//Print the tagname, text, html, content of the DOM
// let para=document.querySelector("p");
// console.log(para.tagName);
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);

// let div=document.querySelector("div");
// console.log(div.tagName);
// console.log(div.innerText);
// console.log(div.innerHTML);
// console.log(div.textContent);

//Create a text in the html using p tag. Then add another text to it using JS.

// let para=document.querySelector(".class");

// para.innerText=para.innerText+ ". " + "Hi, I'm New Text";

//Create 10 divs with common class names. Then set unique text for each of them.
// let divs=document.querySelectorAll(".class");

// let i=1;
// for(a of divs){
//     divs[i-1].innerText= "New Text " + i;
//     i++;
// }

//set the attribute of any element.
// let h2=document.querySelector("h2");
// h2.getAttribute("oldHeadingStyle");
// h2.getAttribute("newHeadingStyle");
// h2.setAttribute("oldHeadingStyle", "newHeadingStyle");

//Create a button in HTML. Then insert the button inside the div at the top.
// let div=document.querySelector("div");
// let btn=document.querySelector("button");

// div.prepend(btn);