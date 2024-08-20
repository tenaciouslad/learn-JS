/*
Certainly! Loop control statements allow you to manage the flow of loops by skipping iterations or exiting loops prematurely. In JavaScript, there are several key loop control statements:

break
continue
return
label
*/

// use of "break"

// The break statement is used to exit a loop immediately, regardless of the loop's condition.

for(let x = 0; x< 8;x++){
    if(x==4){
        break;
    }
    console.log(x);

    // o/p : 1,2,3,4
}

// use of "continue"

// The continue statement is used to skip the current iteration of the loop and proceed with the next iteration.
for(y = 0;y<8;y++){
    if(y==4){
        continue;
    }
    console.log(y);
    // o/p : 0,1,2,3,5,6,7
}

// use of "return"

function firsteven(numbers){
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            return numbers[i];
        }
    }
    return null;
}
const numbers = [1, 3, 7, 8, 10];
console.log("First even number:", firsteven(numbers));
