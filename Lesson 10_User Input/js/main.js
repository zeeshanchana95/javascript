//User Input

//Types of Popups


/*
//use to alert user about something
alert("Hello World!");
*/

/*
//confirmation popups: used to confirm something from user
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
*/


//asking direct input from user
let myName = prompt("Please enter your name");
console.log(myName); //EnteredName

//when user select cancel, then "null" value returned which also represents false and we can't check or use string methods or properties on null

//Method 01: with ?? (nullish colskin operator). It will check whether the variable has value or not, if it has value, value will be returned otherwise value after ?? will be returned
console.log(myName ?? "You didn't entered your name"); //EnteredName or You didn't entered your name
//what if we didn't entered name and click OK. So, there is issue here. Let's fix this.

//Method 02:
myName = prompt("Please enter your name");
//console.log (typeof myName); //string
if(myName) {
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());
    console.log(myName ?? "You didn't entered your name"); //EnteredName
} else {
    console.log("You didn't entered your name");
}


