

if (true) {
    let a = 10
    const b = 20
    var c = 30 // gives the global access.. 
}
/*
console.log(a);//error
console.log(b);//error
console.log(c);//30

*/


function one(){
    const username = "isha"

    function two(){
        const website = "utube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

