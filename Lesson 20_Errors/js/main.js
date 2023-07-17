//JavaScript Errors and Errors Handling

/*
Error Types:
1. Reference Error: 
2. Syntax Error:
3. Type Error:

Handling Errors (so that code will not stop to execute)
    - using try{}-catch(){}

Creating Custom Errors:
    - throw new customErrorFunction(msg)

Throwing Erorrs using built-in error
    - using constructors
*/

"use strict";
//finally{} block 
const makeError = () => {
    let i = 1
    while(i <= 5){
        try {   
            if(i % 2 != 0){
                throw new Error("Odd number!");
            }
            console.log("Even number!")
        } catch (err) {
            console.error(err.stack);   //Error: Odd number!
            console.log("...finally");
            i++;
        }
    }
}
makeError();

