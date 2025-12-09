//stack(primitive) , heap(non-primitive)

// ************stack***********

let channel = "ajayverma.com"

let anotherName = channel
anotherName = "ajayKumar"

// console.log(channel); //ajayverma.com
// console.log(anotherName);//ajayKumar



//********** heap*********

let userOne = {
    email:"userone@gmail.com",
    password:232343
}

let userTwo = userOne

userTwo.email = "ajaykumar@gmail.com"

// kisi ek  me change kiya to dono me changes show hoga....
console.log(userOne.email);//ajaykumar@gmail.com
console.log(userTwo.email);//ajaykumar@gmail.com

