// here we will discuss about the while loop and its variations

// basic syntax

/*
while (condition) {
  // code to be executed
}
*/
//////////////////////////////////////////////////////////////////////////////////
//basic while

let i = 0;
while(i<7){
    console.log("Thala for a reason")
    i++;
}
/////////////////////////////////////////////////////////////////////////////////
//DO-WHILE LOOP
/*
do {
  // code to be executed
} while (condition);
*/

let gautam = 0;

do{
    console.log("Sirf ek chakke ne match nhin jitaya");
    gautam++;
}
while(gautam<5)
/////////////////////////////////////////////////////////////////////////////////
//INFINITE WHILE LOOP

//SYNTAX
/*
while (true) {
  // code to be executed infinitely
}
*/

// Breaking Out of a while Loop

let  j= 0;
while (j < 10) {
  if (j === 5) {
    break;
  }
  console.log(j);
  j++;
}
//This loop will print numbers from 0 to 4. When i equals 5, the break statement will terminate the loop.And the whole program will end
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Skipping an Iteration with "CONTNUE"

let z = 0;
while (z<4){
    z++;
    if(z == 3){
        continue;
    }
    console.log(z);

}
//////////////////////////////////////////////////////////////////////////////////////////////////
// USING THE NESTED WHILE LOOP
let p = 0;
while (p < 3) {
  let q = 0;
  while (q < 3) {
    console.log(`p = ${p}, q = ${q}`);
    q++;
  }
  p++;
}
/////////////////////////////////////////////////////////////////////////////////////////////