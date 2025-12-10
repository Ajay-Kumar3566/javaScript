const user ={
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this);// this keyword refers to the current object..(not any variable)
    }

}
user.welcomeMessage()
console.log(this);//{}
function chai(){
    let username = "chaiAurCode"
    console.log(this.username);//undefined(reason:not applied on the variable or inside an object)
}
chai()




//++++++++++ Arrow function +++++++++



const add = (num1,num2)=>{
    return num1+num2//explicit return
}
console.log(add(2,3));


// implicit function calling..

const addTwo = (num1,num2)=>(num1+num2)
console.log(addTwo(9,6));
