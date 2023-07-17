//Conditionals: Ternary Operator

//Syntax: condition ? ifTrue : ifFalse

//Example 01: Chicken Noodle Soup
let soup = "Chicken Noodle Soup"
let respone = soup ? "Yes, we have soup" : "Sorry, no soup is today";
console.log(respone); //Yes, we have soup

//here presence of value evaluates "true" and "false" in case of absence of value

soup = '';
respone = soup ? "Yes, we have soup" : "Sorry, no soup is today";
console.log(respone); //Sorry, no soup is today



//Example 02: chaining multiple ternary operators 
soup = "Chicken Noodle Soup";  
let isCustomerBanned = true;
let soupAccess = 
    isCustomerBanned ? "Sorry, no soup for you" 
    : soup ? `Yes, we have ${soup} to today`
    : "Sorry, no soup today."
console.log(soupAccess); //sorry, no soup today.

/*
let soup = "Chicken Noodle Soup";  
let isCustomerBanned = false;
let soupAccess = 
    isCustomerBanned ? "Sorry, no soup for you" 
    : soup ? `Yes, we have ${soup} to today`
    : "Sorry, no soup today."
console.log(soupAccess); //Yes, we have Chicken Noodle Soup today.
*/

/*
let soup = "";  
let isCustomerBanned = false;
let soupAccess = 
    isCustomerBanned ? "Sorry, no soup for you" 
    : soup ? `Yes, we have ${soup} to today`
    : "Sorry, no soup today."
console.log(soupAccess); //Sorry, no soup today.
*/


//Example 03: Grading Scale
let testScore = 79;
let myGrade = testScore > 89 ? "A"
              : testScore > 79 ? "B"
              : testScore > 69 ? "C"
              : testScore > 59 ? "D"
              : "F"
console.log(`My test grade is ${myGrade}`); //My test grade is C


//Example 04: Rock Paper Scissors Game
let playerOne = "paper"
let computer = "rock"
let result =  
    playerOne === computer ? "Tie game"
    : playerOne === "rock" && computer === "paper" ? "computer wins"
    : playerOne === "paper" && computer === "scissors" ? "Computer wins"
    : playerOne === "scissors" && computer === "rock" ? "computer wins"
    : "playerOne wins";
console.log(result); //playerOne wins

/**
 * playerOne=compu, computer=paper, scissor=scissor -> Tie
 * rock=rock, paper=
 */