// Object

interface User {
    fullname : string;
    email : string;
    age? : number;
}

const user1 : User = {
    fullname : "hoang",
    email : "hoang@gmail.com",
    age : 20
}

const user2 : User = {
    fullname : "huy",
    email : "huy@gmail.com",
}
// console.log(user1)

//? Function
// Declaration Function

function sum1(a : number,b : number) : number {
    return a + b;
}

// Expression Function

const sum2 = function(a: number,b: number) : number {
    return a + b;
}

// Arrow Function

const sum3 = (a: number, b: number) : number => {
    return a + b;
}


// Intersection Type
interface Account {
    readonly id : string,
    fullname : string,
    age? : number
}

interface Contact {
    hotline : string,
    email? : string
}

interface Social {
    zalo? : string,
    facebook? : string
}

type AccountContract = Account & Contact;

const user : AccountContract = {
    id : "1",
    fullname : "hoang",
    hotline : "123",
    email : "hoang@gmail.com"
}


