// function ke bare me dekh lete hai...

function sayMyname(){
    console.log("Ajay");
    console.log("Kumar");
}
sayMyname//it's only reference ..
sayMyname()//it's full call of the functions..

/*
don't entertain with storing result in a variable
function sum(num1,num2){
    console.log("The sum is:",num1+num2);
    
}
const result = sum(3,4)
console.log(result);//undefined..
*/

function sum(num1,num2){
    // console.log("The sum is:",num1+num2);
    return num1+num2;
    
}
const res = sum(5,6)
// console.log(res);// it will work smoothly


function calculateCartPrice(val1,val2,...num1){
    return val1
}
// console.log(calculateCartPrice(100,200,3000));


// how to pass an object in a function

const user = {
    username : "ravi",
    price : 2799
}

function detail(myobj){
    console.log(`Username is ${myobj.username} and price is ${myobj.price}`);
    
}
detail(user)