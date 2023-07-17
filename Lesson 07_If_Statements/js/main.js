//Conditionals: If Statements

/*
//syntax
if(condition1) {
    //run some code
} else {
    //run some different code
}
*/

//if-else, but "soup" value is undefined in else reply, let fix it.
/*
let soup = "chicken noodle soup";
let reply;
//the condition of if statement is the value of our soup. If "soup" has some value, set the reply value otherwise other reply value.
if (soup) { 
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of ${soup}`;
}
console.log(reply); //Here's your order of chicken noodle soup
*/

//if-elseif-else
/*
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) { 
   reply = "No soup for you!";
} else if(soup && crackers){
    reply = `Here's your order of ${soup} and crackers`;
} else {
    reply = `Sorry, we're out of soup`;
}
console.log(reply); //Here's your order of chicken noodle soup and crackers
*/


/*
//if-elseif-elseif-else
let testScore = 89;
let grade;
if(testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else {
    grade = "D"
}
console.log(grade); //B
*/


/*
//if-elseif-elseif-else
let testScore = 59;
let collegeStudent = true;
let grade;
if(testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else {
    if(collegeStudent) {
        grade = "U"
    } else {
        grade = "F"
    }
}
console.log(grade); //U
*/

//Decision tree!
let playerOne = true;
let computer = false;
if (playerOne === computer) {
    console.log("tie game!");
} else if (playerOne === "rock") {
    if(computer === "paper") {
        console.log("computer wins");
    } else {
        console.log("player one wins");
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        console.log("computer wins");
    } else {
        console.log("player one wins");
    }
} else {
    if (computer === "rock") {
        console.log("computer wins");
    } else {
        console.log("player one wins");
    }
}
//player one wins