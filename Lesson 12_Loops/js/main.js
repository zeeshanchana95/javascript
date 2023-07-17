//Loops


/*
//generate numbers from 2 to 5 by incrementing with 2
let myNumber = 0;
while (myNumber < 50) {
    myNumber += 2; //post increment
    console.log(myNumber);
}

//generate number from 0 t 49
let myNumber = 0;
while (myNumber < 50) {
    console.log(myNumber);
    myNumber++; //post increment

    // myNumber = myNumber + 1;
    // myNumber += 1;

}

OR:

//generate numbers from 1 to 50
let myNumber = 1;
while (myNumber <= 50) {
    console.log(myNumber);
    // myNumber = myNumber + 1;
    console.log(myNumber);
}

OR:
//generate numbers from 1 to 50
let myNumber = 0;
while (myNumber < 50) {
    // myNumber = myNumber + 1;
    myNumber++; //post increment
    // myNumber += 1;
    console.log(myNumber);
}


 */

/*
//do while: it will execute this block of "do" atleast one time and then check "while" condition
let myNumber = 50;
do {
    console.log(myNumber);
} while (myNumber < 50) {  
*/


//for loop: very common
//generationg numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
//generating numbers from 0 to 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//can be written as
for (let i = 1; i <= 10;) {
    console.log(i);
    i++
}

//can be written as
let i = 1;
for (; i <= 10;) {
    console.log(i);
    i++;
}
*/


/*
//we can do other useful things than just printing numbers

//printing each character in string value
let myName = "Zeeshan";
for (let i = 0; i < myName.length; i++) {
    console.log(myName.charAt(i));
}
*/

/*
let myName = "Zeeshan";
let counter = 0;
let myLetter;
while (true) {
    myLetter = myName [counter];
    console.log(myLetter)
    if(myLetter === "n") break;
    counter++;    
}
*/



let myName = "Zeeshan";
let counter = 0;
let myLetter;
while (counter <= 6) {
    myLetter = myName [counter];
    console.log(myLetter);
    if(counter === 1) {
        counter += 2;
        continue; //continue the loop back the at the top and skip the statements below "continue" keyword to execute
    }
    if(myLetter === "n") break;
    counter++;    
}

console.log(counter);