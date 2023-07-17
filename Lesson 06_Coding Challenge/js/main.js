//Your first coding challenge

//write a code that will return a random letter from your name


//Method 01: Step by Step
let fullName = "Zeeshan";
/*
console.log("Full Name: ", fullName);

let totalCharacters = fullName.length;
console.log("Total Characters: ", totalCharacters);

let randomNumber = Math.floor(Math.random() * totalCharacters); 
console.log("Random Number Generated", randomNumber);

let individualCharacter = fullName.charAt(randomNumber);
console.log("Random Name Character: ", individualCharacter)
*/

//Metho 02: Using Chaining
console.log(fullName.charAt(Math.floor(Math.random() * fullName.length) + 1))
console.log(fullName.charAt(Math.floor(Math.random() * fullName.length)))
console.log(fullName.charAt(Math.floor(Math.random() * fullName.length) + 1))
console.log(fullName.charAt(Math.floor(Math.random() * fullName.length) + 1))
console.log(fullName.charAt(Math.floor(Math.random() * fullName.length) + 1))
console.log(fullName.charAt(Math.floor(Math.random() * fullName.length) + 1))