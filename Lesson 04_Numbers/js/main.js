//Numbers

//An Integer is a whole number
let myNumber = 42; //42

//A number with a decimal point is a float which references the floating point
let myFloat = 42.0;
console.log(myFloat);//42

myFloat = 42.01;
console.log(myFloat);//42.01

let myString = "42"
console.log(myString); //42 but here 42 is string type

 console.log(myNumber === myFloat) //false because values are different
 
 myFloat = 42.0;
 console.log(myNumber === myFloat) //true
 
 console.log(myNumber === myString) //false due to different data type

 console.log(myString + 3); //423 due to concatenation 

console.log(Number(myString) + 3); //45
console.log(Number(myString) === myNumber); //true

// if we try to convert a string which is not a number, then Number() will return NaN (Not a Number). This is happend with string data or undefined data, 1 for true and 0 for false in boolean,
console.log(Number("Zeeshan")) //NaN
console.log(Number(undefined)) //NaN
console.log(Number(true)) //1
console.log(Number(false)) //0 (0 equals to false in js )




//Number Methods:

//Number.isInteger() determines whether the passed value is an Integer.
console.log(Number.isInteger(myFloat)) //false
console.log(Number.isInteger(myString)) //false
console.log(Number.isInteger(myNumber)) //true


//The Number.parseFloat() method parses an argument and returns a floating point number. Ifa number cannot be parse from the argument, it return NaN.
console.log(Number.parseFloat(myString)); //42 
console.log(Number.parseFloat(myFloat)); //42.01
console.log(Number.parseFloat("Hi")); //NaN

//when parse string which contains other characters other than number, then it will parse number and remove other characters
myString = "42.123abc";
console.log(Number.parseFloat(myString)); //42.123


//the toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myString).toFixed(2)); //42.12

//it also rounds up by removing trailing decimals
console.log(myFloat.toFixed(2)); //42

//this mehtod returns string data not number data
// myString = "42.123abc"
// console.log(myString.toFixed()) //42


//The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat).toFixed()) //42

//remove string characters and return number
myString = "42.13abc"
console.log(Number.parseInt(myString).toFixed()) //42



//The toString() method returns a string representing the number data.
console.log(myFloat.toString())//42.01
console.log(typeof myFloat.toString()) //string
console.log(typeof Number.parseFloat(toString())); //number


//we can get the benefit of several methods by chaining them together
console.log(Number.parseFloat("4.237abc").toFixed.toString()) //string -> there is no need to use toString() after toFixed() method because toFixed() already returns string


// NaN = Not a Number
console.log(Number("Zeeshan"));

// The Number.isNaN() method determines whether the passee value is NaN AND its type is Number, Number.isNaN
console.log(Number.isNaN("Zeeshan")); //false

//There is also global isNaN() function that responds differently. It only determines if the value is NaN or not. It doesn't check whether variable passed is number or not.
console.log(isNaN("Zeeshan")) //true (is the passed value is not a number -> Yes)






