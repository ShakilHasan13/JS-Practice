/*You are creating a website for your college. Create a class User
with 2 properties name and email. It also has a method named viewData
that allows user to view websites' data. */
let data="Secrate Data";
class User{
    constructor(name, email){
            this.name=name;
            this.email=email;
    }
    
    viewData(){
        console.log("Data= ", data);
        }
}
let student1=new User("Shakil Hasan", "md.shakil.hasan92@gmail.com");
let student2=new User("Mitul", "mitulmia34@gmail.com");
let teacher1=new User("Dean", "deancitycollege@gmail.com");
//we can create a class for the students and another class for the 
//teachers which will inherent the User class data and also can
//have their own properties. Try it later. 

/*Create a new class called Admin which inherits from User class.
Add a new method called editData to Admin that allows it to edit
website data.*/
class Admin extends User {

    constructor (name, email){
        super(name, email);
    }
    editData(){
        data="New Data";
    }
}
let admin=new Admin("admin", "admin1@gmail.com"); //We can't print this data until we use the constructor and super keyword
//Now admin can change the data like this:
console.log(admin.editData());