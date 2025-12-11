// for of loop

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const grettings = "Hello World"

// for (const greet of grettings) {
//     console.log(greet);// will give a character
// }


// Map--> no duplicate values

const map  = new Map()
map.set('IN',"India")
map.set('FR',"France")
// console.log(map);//Map(2) { 'IN' => 'India', 'FR' => 'France' }


// how to iterate map ..

for (const [key,value] of map) {
    // console.log(key ,':', value);
    
}



// for in loop...

const language = {
    c : "c language",
    rb : "ruby",
    swift : "swift"
}
for (const key in language) {
    // console.log(key);// return the keys only
    // console.log(language[key]);//return both key and value..
}




// for each loop.....


const coding = ["js","c","c++","python"]
coding.forEach(function (item) {
    // console.log(item);
});

coding.forEach((item) =>{//arrow function.....
    // console.log(item);
})

// accessing objects inside an array.....


const myCoding = [
    {
        language: "python",
        languageFile :"py"
    },
    {
        language:"Java",
        languageFile:"java"
    }
]
myCoding.forEach((item)=>{
    console.log(item.language);
    console.log(item.languageFile);
    
    
})