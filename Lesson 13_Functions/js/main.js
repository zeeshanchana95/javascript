//Functions

/*
SYNTAX: 
function functionName(parm1, parm2, ..) {
    //other lines of code
    return someValue
}

//() -> are the operators
//{} -> shows code block that we want to execute
//return -> value that function returns
*/



//Example: 01
/*
//function declaration syntax:
function sum() {
    return 2 + 2;
}

//calling function
console.log(sum()) //4
*/


/*
function sum (num1, num2) {
    console.log(num1); //2
    console.log(num2); //undefined
    return num1 + num2; //NaN
}

console.log(sum(2, 6)); //8
console.log(sum(2)); //NaN
*/

function sum (num1, num2) {
    if(num2 == undefined) {
        return num1 + num1;
    }
    return num1 + num2; //4
}

console.log(sum(2, 6)); //8
console.log(sum(5)); //5
console.log(sum(5, 10)); //15



//Example 02: Getting Username from Email
/*
function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf('@'));
}
console.log(getUserNameFromEmail('random@gmail.com')); //random 
*/


//ANONYMOUS FUNCTION: functions with no any name
/*
const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf('@'));
}
console.log(getUserNameFromEmail('zeeshan@gmail.com')); //zeeshan
*/


//ARROW FUNCTIONS: 
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf('@'));
}
console.log(getUserNameFromEmail('zeeshan@gmail.com')); //zeeshan


//arrow function short-hand ways
/*
Note:
- can remove () if only one parameter
- can remove {} if only one statement to execute
- can remove "return" keyword if oly one statment to execute and return

const getUserNameFromEmail = email => {
    return email.slice(0, email.indexOf('@'));
}

const getUserNameFromEmail = email => email.slice(0, email.indexOf('@'));
*/


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("zEEshAN")); //Zeeshan
console.log(toProperCase("september")); //September