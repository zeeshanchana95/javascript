//var, let, and const

//Example 01:
/**
 - this is the way used to declare variables in js untill 2015 when keywords "let and const" introduced
 
 - it is now considered as a legacy code to declare variables in preference of let and const

 - why:
    1. it doesn't throw any error when we re-define or re-declare that same variable.

    var x = 1;
    var x = 2;
    console.log(x)

    But, if we do this to let, we will get "SyntaxError: already been declared"     let x = 1;
    let x = 2;
    console.log(x)

    - both var and let allows re-assignment
    var x = 1;
    x = 2;
    aconsole.log(x) //2 (No error)

    let x = 1;
    x = 2;
    console.log(x) //2 (No error)


    But, if we re-assign value to variable declared as const, it will throw TypeError and this makes const the preference of most
    
    const x = 1;
    x = 2;
    console.log(x); //TypeError: Assignment to constant variable.
 */



/*VERSION 01:


//GLOBAL SCOPE: use any where in the code
var x = 1;
let y = 2;
const z = 3; 


//LOCAL SCOPE: 
//block scope
{
    let y = 4; //not available in the global scope, only available to this scope
    console.log(y); //4
}

//function scope
function myFunc() {
    const z = 5;
    console.log(z); //5
}
myFunc() //5

// console.log(y); //ReferenceError: y is not defined
// console.log(z); //ReferenceError: z is not defined
*/


/**
 * VERSION: 02:
 
//GLOBAL SCOPE: use any where in the code
var x = 1;
let y = 2;
const z = 3; 

//LOCAL SCOPE: 

//function scope
function myFunc() {
    const z = 5;
    console.log(y); //2 (global -> y)

    //block scope
    {
        //values inside this block can't go to the outer block/function

        let y = 4; //not available in the global scope, only available to this scope
        console.log(y); //4 (local, block -> 4)
    }

}
myFunc() //5

// console.log(y); //ReferenceError: y is not defined
// console.log(z); //ReferenceError: z is not defined

 */



/**
VERSION 03:
//GLOBAL SCOPE
var x = 1;
let y = 2;
const z = 3; 

//LOCAL SCOPE: 
//function scope
function myFunc() {
    const z = 5; //available to this block
    console.log(y);

    //block scope
    {
        const z = 5; //availabe to this block
        console.log(y); 
    }

}
myFunc() //5

// console.log(y); //ReferenceError: y is not defined
// console.log(z); //ReferenceError: z is not defined
 */



//Example: 02

/*
//global scope
var x = 1; 
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    
}

myFunc();
*/

/*
OUTPUT:
global: 1
global: 2
global: 3
function: 1
function: 2
function: 3
block: 1
block: 2
block: 3
*/

/*
//global scope
var x = 1; 
let y = 2;
const z = 3;

console.log(`global: ${x}`); //1
console.log(`global: ${y}`); //2
console.log(`global: ${z}`); //3

//function level (local scope)
function myFunc(){
    var x = 10;
    const z = 5;
    console.log(`function: ${x}`); //10
    console.log(`function: ${y}`); //2
    console.log(`function: ${z}`); //5

    {
        console.log(`block: ${x}`); //10
        console.log(`block: ${y}`); //2
        console.log(`block: ${z}`); //5
    }
    
}

myFunc();
*/

/*
//global scope
var x = 1; 
let y = 2;
const z = 3;

console.log(`global: ${x}`); //1
console.log(`global: ${y}`); //2
console.log(`global: ${z}`); //3

//function level (local scope)
function myFunc(){
    var x = 10;
    const z = 5;
    console.log(`function: ${x}`); //10
    console.log(`function: ${y}`); //2
    console.log(`function: ${z}`); //5

    {
        var x = 11;
        const z = 6;
        console.log(`block: ${x}`); //11
        console.log(`block: ${y}`); //2
        console.log(`block: ${z}`); //6
    }
    
}

myFunc();
*/

//global scope
var x = 1; 
let y = 2;
const z = 3;

console.log(`global: ${x}`); //1
console.log(`global: ${y}`); //2
console.log(`global: ${z}`); //3


function myFunc(){
    //function level (local scope)
    var x = 10;
    const z = 5;
    {
        //block-level scope
        var x = 11; //function scoped ( override the value of x=10 to x=11)
        const z = 6; //block scoped
        console.log(`block: ${x}`); //11
        console.log(`block: ${y}`); //2
        console.log(`block: ${z}`); //6
    }
    
    console.log(`function: ${x}`); //11
    console.log(`function: ${y}`); //2
    console.log(`function: ${z}`); //5
}

myFunc();


