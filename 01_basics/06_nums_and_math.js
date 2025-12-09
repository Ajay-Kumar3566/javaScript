// aaieyen dekhte hai number aur math in javaScript..

//************** Number *****************
const score = 400
// console.log(score);

const balance = new Number(4000)
// console.log(balance);//[Number:4000]

// console.log(balance.toString())// method to convert into string..



// console.log(balance.toFixed(2));//show after decimal value.


// toPrecision(argument)method...
const otherNum =  123.89
// console.log(otherNum.toPrecision(3));//124
// console.log(otherNum.toPrecision(4));//123.9

//local string
const hundreds = 10000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));
/*
// these all are Number properties and many more..
Number.MAX_VALUE
Number.MIN_VALUE
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.POSITIVE_INFINITY

// these are methods related to Number
Number.isInteger()

Number.parseFloat()

Number.parseInt()
*/


//+++++++++++++ Math +++++++++++++++

// console.log(Math);//Object [Math] {}

// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.floor(4.6));//4
// console.log(Math.ceil(8.4));//9
// console.log(Math.max(3,4,5,10,1,2));//10
// console.log(Math.min(4,5,3,2));//2


console.log(Math.random());//gives random value between 0 and 1
console.log((Math.random()*10) + 1);// value will be greater than 1
 















