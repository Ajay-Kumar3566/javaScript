
// method 01..
const name = "Ajay"//declaration of string...
const repoCount = 50
// console.log(name);//Ajay
// console.log(typeof name);//string


// console.log(`Hey, my name is ${name} and my repo is ${repoCount}`);// using placeholder...


// method 02....
const gameName = new String("Ajay Kumar")
// console.log(gameName); //op:[String: 'Ajay Kumar']
// console.log(typeof gameName);// object.
/* 
it will be stored as an object..
[
0:A,
1:j,
2:a,
3:y,
4:space,
5:K
6:u,
7:m,
8:a,
9:r
like this..
]
*/

// console.log(gameName[0]);
// console.log(gameName[1]);

// console.log(gameName.__proto__);//__proto__ tells you where your object gets extra functions from..It is outdated so we use..
// console.log(Object.getPrototypeOf(gameName));// the modern method..

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));// to get the character...
// console.log(gameName.indexOf('t'));//to check the index value

// substring method.
const newString = gameName.substring(0,4) // negative accepts but starts with zero..
// console.log(newString);

//slice method...
const anotherString = gameName.slice(-8,4)
// console.log(anotherString);


//trim method...(works on white space and line terminating.)
const newStrOne ="  ajay   "
// console.log(newStrOne);
// console.log(newStrOne.trim());

//replace method

const url = "http://ajay.com/ajay%29verma"
console.log(url.replace('%29' , '_'));
console.log(url.includes('ajay'));//boolean true/false


//split method...
console.log(gameName.split('_'));
















