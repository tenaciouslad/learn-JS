//here we will discuss about the conditional stmts

//In JavaScript, if-else statements are used to execute code based on certain conditions. The basic syntax looks like this:\

/*
if (condition) {
    // Code to run if condition is true
  } else {
    // Code to run if condition is false
  }
  */

  // 1.Basic if else

  let age = 18;

  if (age >= 18)
{
    console.log("Ab tum mard ban gaye ho");
}

else{

    console.log("Chotti bachi ho kya");
}

//  if-else if-else

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Nested if-else

let salary = 50000;

if (salary < 100000) {
    console.log("you are not working in microsoft");
} 
else if (salary >= 100000 && salary < 200000) {
    console.log("you are working in infosys");
} 
else {
    console.log("you are a very good boy");
}
