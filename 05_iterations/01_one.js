// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);   
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5 ");
//         break;// no maffi.
        
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5 ");
        continue// ek baar ke liye skip kr dunga..
        
    }
    console.log(`value of i is ${index}`);
}

