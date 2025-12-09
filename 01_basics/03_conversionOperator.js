// chaliye dekhte hai conversion of dataTypes...


let score = 40

let inString = String(score)

// console.log( typeof inString); // string
// console.log( typeof score); // number



let score1 = "33az"

let convert = Number(score1)
// console.log(score1)

// NaN => it is not  a Number
// console.log(convert)// ye convert to ho gya hai but number nhi hai...

// console.log( typeof convert)
// console.log( typeof score1)


let isValid = true;
let num = Number(isValid) // true=> 1;  false=>0
// console.log(num);




// *********operations*****************

let value =3
let negVal = -value
// console.log(negVal);

console.log("1" + 2) // 12  if string comes first it will convert all into string
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 if number comes first it will be calculated then string append.

console.log(+true);//1
console.log(+""); //1

let num1,num2,num3
num1=num2=num3=2+2 // bad declarations..
// console.table([num,num1,num3]);




