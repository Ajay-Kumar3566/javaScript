const user = {
    username : "ajay",
    loginCount : 8,
    signIn : true,// three of them are the properties...

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this);// it gives the current context
        
    }


}
// console.log(this);//{} global context hai isiliye empty aa ha hai...

// console.log(user.username);
// console.log(user.getUserDetails());



// constructor....

function User(username, age, loggedIn){
    this.username = username
    this.age = age
    this.loggedIn = loggedIn
    return this
}
// new is used to create new instances(ye first of all empty hota hai) so that value of object can not be overwritten..
const userOne = new  User("ajay", 12, true);
const userTwo = new  User("anuj", 23, false);
// console.log(userOne);// agr new keyword use nhi kr rhe hai to ye value ko overwrite kr dega... output iska..
// username: 'anuj',
//   age: 23,
//   loggedIn: false ye aayega..

console.log(userOne);
console.log(userTwo); // ab thik hai different value dega..



