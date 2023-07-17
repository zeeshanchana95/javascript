//Conditionals: Switch Statments

/*
//syntax
switch (expression OR value) {
    case choice1: 
        //run this code
        break;
    case choice2:
        //run this if choice1 fails
        break;
    //add other cases

    default:
        //run this code if no case matches and no need for a break statement here
}

//if case1 match, switch statement will stop with break statement and never make the evaluation stage of case 2. after any number of possible cases, switch statements are completed with default option that chosed if none of the above statements are chosen.
*/

/*
switch(2) {
    case 1:
        console.log(1);
        break;
        
    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    default:
        console.log("No match");
}

//No match (data types not match when pass "2")
//2 (when pass 2)
*/

//we can also put mathematical expression inside parenthesis to be evaluated into single value.
/*
switch(Math.floor(Math.random() * 3 + 1)) {
    case 1:
        console.log(1);
        break;
        
    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    default:
        console.log("No match");
}
//3 (random number)
*/

let playerOne = "rock"; // or "paper"
let computer = "paper"; //or "rock"

switch (playerOne) {
    case computer:
        console.log("Tie game");
        break;
    case "rock":
        if(computer === "paper") {
            console.log("computer wins");
        } else {
            console.log("playerOne wins")
        }
        break;
    case "paper":
        if(computer === "scissors") {
            console.log("computer wins");
        } else {
            console.log("playerOne wins");
        }
        break;
    default:
        if(computer === "rock") {
            console.log("computer wins");
        } else {
            console.log("playerOne wins");
        }
}
//computer wins