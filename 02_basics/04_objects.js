// singleton object..

const tinderUser = new Object()      //singleton object..

tinderUser.id = "1234"
tinderUser.name = "Bholu"
tinderUser.age = 19
// console.log(Object.keys(tinderUser));//return type array so can implement loop on keys / values.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//[ [ 'id', '1234' ], [ 'name', 'Bholu' ], [ 'age', 19 ] ]




// console.log(tinderUser);//{ id: '1234', name: 'Bholu', age: 19 }

// const tinderUser2 = {} 
//literal object..

// console.log(tinderUser);
// console.log(tinderUser2);

// nesting of objects.????
 const user = {
    email : "some@gmail.com",
    fullName : {
        UserName :{
            firstName : "Ajay"
        }
    }
 }
//  console.log(user.fullName.UserName.firstName);
 

// how to merge two objects..??

const  obj1 ={1:"a",2:"b"}
const  obj2 = {3:"a",4:"b"}
const  obj3 = {5:"a",6:"b"}
/* require returns value..
Object.assign(target,source)
target=>{},source=>obj1,obj2,obj3
*/
const obj4 = Object.assign({},obj1,obj2,obj3)//by using assign method.
// console.log(obj4);
const obj5 = {...obj1, ...obj2, ...obj3}//by using spread method..
// console.log(obj5);


//+++++++destructing of object +++++++++


const tutor = {
    name :"Hitesh",
    domain : "Backend",
    email : "hitesh@gmail.com"
}

tutor.domain//it's ok
const{domain : d} = tutor//destructing of object domain=>d(ab domain ka existence khatam ho gya hai.. if we try to log 'domain' it will give an error)
// console.log(domain);
// console.log(d);









