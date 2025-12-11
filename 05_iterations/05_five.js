// // const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNums.map( (num)=> num+10)

// // console.log(newNums);
// /*[
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20]*/

// // const myNewNum = myNums
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=> num>=40)

// // console.log(myNewNum);
// /*
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ] */



// reduce method .........

const myNums = [1,2,3]
// const myTotal = myNums.reduce((acc,curr)=>acc+curr,0);
const myTotal = myNums.reduce(function (acc,currVal){
    console.log(`acc:${acc} and currval:${currVal}`);
    
    return acc+currVal
},0)
console.log(myTotal);
