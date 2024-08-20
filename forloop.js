//Basic for Loop

// The basic for loop is used to execute a block of code a specified number of times.

 /*
 for (initialization; condition; increment)
  {
  // code block to be executed
  }
  */

  for(let i = 0;i<3;i++){
    console.log(i);
  }
  //...................................................................................................//

  // for...of Loop

  /*
  for (variable of iterable) {
  // code block to be executed
}
*/

const fruits = ["apple", "banana", "cherry"];
for (const count of fruits) {
  console.log("for...of loop:", count);
}
// ........................................................................................................//

// for...in Loop

/*
for (variable in object) {
  // code block to be executed
}
*/

const person = {name: "kirmada",age:"100",city:"Dholakpur"};
for (const key in person){
    console.log(key,person[key]);
}

//..............................................................................................................//

// forEach Loop

/*
array.forEach(function(currentValue, index, arr), thisValue);
*/

// 1st example

const numbers = [1,2,3,4];
numbers.forEach(function(number,index){
    console.log(`Element at index ${index} is ${number}`);
});

// 2nd example using arrow function


const heroes = ["Super Man", "Bat Man", "Shazam"];
heroes.forEach((hero, index) => {
  console.log(`Hero at index ${index} is ${hero}`);
});


//  3rd example

// using for each loop to modify elements

const veg = ["tomato","onion","potato"];
veg.forEach((vegitem,index)=> {
    veg[index]=vegitem.toUpperCase();
});
console.log(veg);



