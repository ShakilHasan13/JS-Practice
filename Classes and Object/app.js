//normal object
const student={
    name: "Md. Shakil Hasan",
    height: 175,
    age: 23,
    printAge: function (){
        console.log("age= ", this.age);
    }
}
console.log(student.printAge());

//Prototype is a by default object of an object or of an array

//We can create our own Prototype also like this:
const employee={
    calTax(){
        console.log("Tax rate is 8%");
    },
    calTax2: function(){
        console.log("Tax rate is 10%");
    } // We can use both of process to define functions in our object

}

//Let's say we have an employee named Ratul
const Ratul={
    salary: 5000
}
// Now we can access to the methods of employee object by doing 
// this: object.__proto__=from where we want to access

Ratul.__proto__=employee;
console.log(Ratul.calTax2());
//We can use proto for multiple time
const Ratul2={
    salary:2000,
}
const Ratul3={
    salary: 3000,
}
Ratul2.__proto__=employee;
Ratul3.__proto__=employee;
console.log(Ratul3.calTax());

//If the prototype and object property is same, the object
//property will be prioritized. For example:
const Ratul4= {
    salary: 4000,
    calTax(){
        console.log("The tax rate is 1%");
    }
}
 Ratul4.__proto__=employee;
 //Although Ratul4 has the prototype of employee and according to
 //employee's calTax method, the tax rate should be 8%. But
 //because of the Ratul4's calTax method, it changed to 1%
 console.log(Ratul4.calTax()); 

 
 
 //Class is the template to create different objects
 class Car {
    startCar(){
        console.log("Car Starts");
    }
    stopCar(){
        console.log("Car Stops");
    }
 }
//Now we can create our objects using the Car template and can access all of the properties of the car class
let audiCar= new Car();
let lamborginiCar= new Car();
console.log(audiCar.startCar());
//We can parameteres also in the class's method's
class Car2{
    setBrand(brand){
        this.brandName=brand;
    }
}
let marsitiseCar=new Car2();
marsitiseCar.setBrand("Marsitise");
console.log(marsitiseCar);

//Constrator() method is :
//a)automatically invoked by "new" keyword
//b) initializes object. 
//it is created automatically if not defined
class Car3{
    constructor(){
        console.log("It's constructor")
    }
    breakCar(){
        console.log("Breaked")
    }
}
//Whenever we create an object of the class, the constructor
//will be called instantly
let myobj=new Car3(); //It will print "It's a constructor"

//We can initialized the brand inside the constructor so that
// the brandName will be the must to input. For instance:
class Car4{
    constructor(brand){
            this.brand=brand; //this.brand=object's brand. brand is the parameter's brand
            console.log("Constractor of Car4 class")
    }
}
let q=new Car4("Audi R8"); //When we create new Car4(), there must be an input in the parenthesis as the constractor defines the must to do part
 //We can change it later:
 q.brand="RoseRoyald";
 //we can pass multiple arguments through the constructor


 //Inheritance
 //extends keyword

 class Parent {
    hello(){
        console.log("Hello")
    }
 }
class Child extends Parent {

}
let obj=new Child();


//super keyword
//super keyword is used to call the constructor of its' parent class. It is used
//to access the properties and methods of the parent class from the child class.
class Person {
    constructor(){
        this.species="Homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(branch){
        super();
        this.branch=branch;
    }
    work(){
        console.log("Solve the problem");
    }
}
//The code will be crashed if there is no super keyword in the child class before
//the this keyword. It's necessary when the the child has also has a constructor.
let engineerObj=new Engineer("Software");
//Therefore, whenever we try to add a constructor in a child class which class
//has a extends keyword, we have to write the super() at the very begining inside the constructor

//The compiling sequence here: the child constructor>parent constructor>child constructor
//We should learn the usage of the super keyword from the documentation.


