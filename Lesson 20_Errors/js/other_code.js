/*
variable = "Zeeshan";
console.log(variable);              //Zeeshan
*/


/*
"use strict";
variable = "Zeeshan";
console.log(variable);         //main.js:4 Uncaught ReferenceError: variable is not defined
*/


/*
//Error Types:

//1. Reference Error: 
variable = "Zeeshan";
console.log(variable);        //Uncaught ReferenceError: variable is not defined



//2. Syntax Error:
Object..create();             //SyntaxError: Unexpected token '.';


//3. Type Error:
const name = "Zeeshan";
name = "Ahmed";         //Type Error: Assignment to constant variable


//Handling Errors (so that code will not stop to execute)
//1. using try{}-catch(){}
const makeError = () => {
    try {   
        const name = "Zeeshan";
        name = "Ahmed";
    } catch (err) {
        console.error(err); //specific for logging errors
        console.warn(err); //specific for logging errors
        console.table(err); //specific for logging errors in table form + add extra details about error
        console.error(err.name);    //give error name
        console.error(err.mesage);  //give error message
        logTheError(err.stack);     //record the logs and look later
    }
}
makeError();    //TypeError: Assignment to constant variable 
*/



/*
"use strict";
const makeError = () => {
    try {   
        const name = "Zeeshan";
        name = "Ahmed";
    } catch (err) {
        console.error(err.stack);   //give extra detail
    }
}
makeError();
*/

 
/*

"use strict";
//calling custom errors
const makeError = () => {
    try {   
        throw new customError("This is a custom error!");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);   //customError: This is a custom error
    }
}
makeError();

//creating custom eror
function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}:${this.message}`;
}
*/

/*
"use strict";
//calling custom errors using built-in errors
const makeError = () => {
    try {   
        throw new Error("This is a error!");
    } catch (err) {
        console.error(err.name);    //Error
        console.error(err.message); //This is a error!
        console.error(err.stack);   //Error: This is a error
    }
}
makeError();
*/