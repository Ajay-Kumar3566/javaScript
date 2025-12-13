class User {
    constructor(username ){
        this.username = username
    }
    logMe(){

        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor (username,email, password){
        // The super keyword is used in class inheritance to access the parent (superclass) constructor and methods from a child class.
        super(username)
        this.email = email
        this.password = password 
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}
const chai = new Teacher("ajay", "ahidh@gmail", 2382)
chai.logMe()
const coffee = new User("coffee")
chai.addCourse()
coffee.logMe()
console.log(chai instanceof User);
console.log(coffee instanceof User );

 