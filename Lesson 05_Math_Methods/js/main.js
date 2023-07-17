//Math Methods and Properties

//return PI value
console.log(Math.PI); //3.141592653589793

//truncate decimal values and return Whole Number
console.log(Math.trunc(Math.PI)) //3

//round() method returns value rounded to the nearest integer
console.log(Math.round(Math.PI)); //3
console.log(Math.round(3.4)); //3
console.log(Math.round(3.5)); //4

// ceil() method will reound the value up
console.log(Math.ceil(Math.PI)); //4
console.log(Math.ceil(3.1)); //4
console.log(Math.ceil(3.0)); //3

// floor() method will reound the value down
console.log(Math.floor(Math.PI)); //3
console.log(Math.floor(3.6)); //3
console.log(Math.floor(3.0)); //3

//pow() method take base number and exponent and return value after calculation i.e., 2*2*2*2 = 16
console.log(Math.pow(2, 4)); //16

//min() method returns smallest number
console.log(Math.min(2, 5, 9)); //2
console.log(Math.min(2, 5, 0)); //0
console.log(Math.min(2, 0.5 ,0)); //0.5
console.log(Math.min()); //Infinity

//max() method return maximum value from 0 or more passed value(s)
console.log(Math.max(2, 0.5 ,0)); //2
console.log(Math.max(2)); //2
console.log(Math.max()); //-Infinity


// random() method will return pseudo random numbers from 0 to 1
console.log(Math.random()); //0.9226197305998491
console.log(Math.random()); //0.5445981166746106
console.log(Math.random()); //0.49601734877941084
console.log(Math.random()); //0.7188222769563044
console.log(Math.random()); //0.49104997296548825
console.log(Math.random()); //0.25413006765124724

// we can combine random() method with other javascript method to generate randion number from 1 to 10 and if we don't add 1 we will get numbers from 0 to 9
console.log(Math.floor(Math.random() * 10) + 1); //6
console.log(Math.floor(Math.random() * 10) + 1); //7
console.log(Math.floor(Math.random() * 10) + 1); //3
console.log(Math.floor(Math.random() * 10) + 1); //5
console.log(Math.floor(Math.random() * 10) + 1); //8


// Why should we use floor() function, why not ceil() because Math.random() returns a range from 0 to 1 that includes 0 but not 1. Moreover, Math.ceil(Math.random() * 10) has a chance fo resulting in zero and Math.floor(Math.random * 10) + 1) is the  correct way to go


