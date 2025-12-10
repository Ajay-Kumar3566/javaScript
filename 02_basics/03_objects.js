// chaliye dekhate hai object ke bare me...
let mySym = Symbol("myObj")//it's a symbol..
//object literals
const JsUser={
    //key->string; value=>can be anything
    name : "Ajay",
    // if we want to use the Symbol as a key of object then...
    [mySym] : "mySymbol",//this is way to take symbol as a key of object
    age : 21,
    location : "Uttar Pradesh",
    email : "ajay@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}

// name of object.key_name
console.log(JsUser.email);//it's ok but not a good practice

//name of object["name of key"]⭐⭐
console.log(JsUser["email"]);//it's a good way

console.log(JsUser[mySym]);

console.log(JsUser);

// how to prevent changes in object..

// Object.freeze(JsUser)
JsUser.email = "ajaykumar@gmail.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}
console.log(JsUser.greeting);//[Function (anonymous)]

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

