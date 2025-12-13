// class User {
//     // jaise hi object bnta hai waise hi constructor call hota hai...
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword (){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username} Verma`
//     }
// }


// const user = new User("ajay", "chai@gmail.com", "1737")
// console.log(user.encryptPassword());
// console.log(user.changeUsername());


// behind the scene 

function Userone(username, email,password){
    this.username = username
    this.email = email 
    this.password = password
}
Userone.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Userone.prototype.changeUsername = function (){
    return `${this.username} Verma`   
}
const tea = new Userone("ajay", "chai@gmail.com", "1737")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());