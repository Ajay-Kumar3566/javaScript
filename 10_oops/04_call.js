function SetUsername(username){
    // complex DB
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){

    SetUsername.call(this, username)// used to hold the reference of object..


    this.email = email
    this.password  = password
}

const chai = new createUser("chai", "chai@gmail.com", "1223")
console.log(chai);
