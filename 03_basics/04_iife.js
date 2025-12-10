// immediately Invoked Function Expressions(IIFE)
(function chai(){
    console.log("DB connected");
})();// global variable ke pollution ko remove krne ke liye iife ka use hota.

(()=>{
    console.log("DB CONNECTED TWO");
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('ajay');