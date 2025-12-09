// array pdhte hai..

const myArr = [0,1,2,3,4,5]//declaration of array
const myHeros = ["Bhagat Singh","Abdul Kalam"]

const myArr2 = new Array(1,2,3,4)//creating an object of type Array
// console.log(myArr[4]);

// Array methods...

myArr.push(6)//insert at last
// console.log(myArr);//delete from last
myArr.unshift(9)//insert at the begin
myArr.shift()//delete from the start



// slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)//remove all from 1 to 3 index element and make changes in the original array.

console.log("C ", myArr);
console.log(myn2);






