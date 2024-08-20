let a = 69
console.log(a);
 
b = 9
console.log(b);
// without mentioning let we can also declare variable

a = "OGGY";
console.log(a);
//here if we use the same "a" variable again to store a new data,then the new data will be the output .

let f = 7;
f = 8;
//let is  Reassignable

let c = 55;
{
    let c = 4;
    console.log(c);
}console.log(c);

// once you use const.keyword you have to assign a value to that variable otherwise it will show error

//Also once you use const.keyword for a particular variable  ,we cannot assign the same variable next time.

let emptyValue = null;
console.log(emptyValue)

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber)