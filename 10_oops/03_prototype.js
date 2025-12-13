let myName = "ajay  "
// console.log(myName.length);// it counts the spaces as well..
// console.log(myName.trim().length);//low IQ🙃🙃

// console.log(myName.trueLength);// ab ek method banate hai..


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

// agr ek baar object to access de doya jaye to ye string , array , function sbhi ke liye applicable ho jata hai...
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

// but yha hm prototype kewal array object ke liye bna rhe hai to ye kewal array ke liye hi accessible hoga..
//heroPower.heyHitesh() error dega...⭐⭐⭐⭐
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()




// Inheritance ke bare me thoda pdh lete hai....

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()