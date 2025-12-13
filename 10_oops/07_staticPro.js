// const { use } = require("react");

const { useEffectEvent } = require("react");

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`); 
    }
     static createID(){
        return 123
    }
}

const user = new User("hitesh")
// console.log(user.createID());
console.log(User.createID());// if createID is a static method... then no need to create object


class Teacher extends User {
    constructor (username,email){

        super(username)
        this.email = email
    }
}
const iphn = new Teacher("iphone","aisd@gmail.com")
console.log(iphn.createID())