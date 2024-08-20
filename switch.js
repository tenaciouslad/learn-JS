// The switch statement in JavaScript is used to execute one block of code from multiple possible blocks based on the value of a given expression. It's a more readable way of chaining multiple if-else statements when comparing the same expression to different values.
// The syntax of a switch statement in JavaScript is as follows:-
/*
switch (expression) {
  case value1:
    // code block to be executed when expression === value1
    break;
  case value2:
    // code block to be executed when expression === value2
    break;
  // more cases...
  default:
    // code block to be executed if none of the cases match
}
*/
// Here is an example of a switch statement in JavaScript:-

let day=3;
let dayName;
switch(day){
    case 0:
        dayName="Sunday";
        break;
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday"
        break;
    case 4:
        dayName="Thursday"
        break;
    default:
        dayName="Invalid"        
}
console.log(dayName); // Output: Wednesday