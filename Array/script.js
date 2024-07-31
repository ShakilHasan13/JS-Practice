/*Create an array to store companies
a) remove the first company
b) remove Uber and add Ola in its place 
c) Add Amazon at the end */

// let companyArray=["Google", "Meta", "Microsoft", "Uber", "Patho"
// ];
// companyArray.shift();
// companyArray.splice(2, 1, "Ola");
// companyArray.push("Amazon");

/* Use the following Arrays' Method:
push(), pop(), toString(), concat(), unshift(), shift(), slice(),
// splice(); */

// let fruits=["Mango", "Lichi", "Dragon", "Dalim"];
// fruits.push("Jack-fruit"); //it will add Jackfruit at the end of the array
// fruits.pop(); //it will remove the last item of the array

// let numbers=[1,2,4,5];
// numbers.toString();

// let name1=["Mitul", "Takia", "Mily"];
// let name2=["Shakil"];
// let name3=["Sihat"];
// let names= name1.concat(name2, name3);

// names.unshift("Raijul");
// names.shift();

// let newNames=names.slice(1,2);

// names.splice(0, 0, "Himel"); //0=index, 0=how many to delete
//"Himel"=add this at the position of 0 index

/*For a given array of marks of students find the avarage 
mark of the entire class*/

// let mark=[89,90,49,88,69,49,98,65,80];

// let sum=0;
// for(i of mark){
//     sum=sum + i;
// }
// let avg=sum/mark.length;
// console.log(`The Avarage Mark of the class: ${avg}`);

/*Create an array with the prices of 5 items. All items have 
an offer of 10% off on them. Change the array to store the final
price after applying offer. */

// let prices=[334, 660, 500, 300, 400];

// prices[0]=prices[0]-(prices[0]/10);
// prices[1]=prices[1]-(prices[1]/10);
// prices[2]=prices[2]-(prices[2]/10);
// prices[3]=prices[3]-(prices[3]/10);
// prices[4]=prices[4]-(prices[4]/10);

// let newPrices=`The new Prices: ${prices}`;
// console.log(newPrices);


/*For a given array of numbers, print the squre of each value 
using the forEach loop.*/

// let numbers=[2,4,5,6,7,9];

// numbers.forEach((n)=>{
//     console.log(n*n);
// })
