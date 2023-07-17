//Arrays

/*
//define array
const myArray  = [];

//add elements to an array 
myArray[0] = "Zeeeshan";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array
console.log(myArray); //(3) ["Dave", 1001, false]

//length property
console.log(myArray.length); //3

//last element in an array
console.log(myArray[myArray.length - 1]); //false

//refer to any one itme with index
console.log(myArray[1]); //1001

//add new item to array (at last by default)
myArray.push("school");
console.log(myArray); //(4) ["Dave", 1001, false, "school"]

//remove and return last item from array
const lastItem = myArray.pop();
console.log(lastItem); //school


//add element at the front of the array and return new length of array

//myArray.unshift(42); ///(4) [42, "Dave", 1001, false]

const newLength = myArray.unshift(42);
const newLength1 = myArray.push();
console.log(newLength); //4
console.log(newLength1); //4

//remove and return element from the front of the array
const firstItem = myArray.shift();
console.log(firstItem); //42


//Question: so, when we remove the elements of the array from the front or from the back, how the positions of items will be adjusted.

//Answer: all the remaining elements will be shifted to the front.
console.log(myArray[1]); 

//we will get "undefined" for the position where items not present
console.log(myArray[2]);


//Question: remove an item from the middle of the array

//only remove element but reserve position and shows "empty -> undefined" in teh removed element position 
delete myArray[1];
console.log(myArray);

//splice(startIndex, totalNoToRemove, replaceWithOneOrMore) method. Remove and replace elements in array. We tell it where to begin and how many elements to delete
myArray.splice(1, 1); //["Zeeshan", false] so, 1001 will be removed

//we can also use splice() method to remove and replace with one or several values
// myArray.splice(1, 2); //replace first and second positions
myArray.splice(1, 1, 42); //["Zeeshan", 42, false]
console.log(myArray);


//if we don't want to delete any values from an array, put 0 in second parameter. So, start from 1 index, doesn't delete any element, put 42 at 1 position and re-array element indexes
myArray.splice(1, 0, 42); //["Zeeshan", 42, false]
console.log(myArray);

*/

/*
const myArray = ['A', 'B', 'C', 'D', 'E', 'F'];

//return new array from index 2 to the end of array                  
// const newArray = myArray.slice(2); 

//return new array from index 2 to the 4th position of array item but not include 5th 
// const newArray = myArray.slice(2, 5); 


//reverse() will reverse the orignal array  items
// myArray.reverse();
*/

//CONVERT ARRAY INTO STRING AND VICE VERSA
/*
//split array into string by separating each element with comma
const newString = myArray.join() //A,B,C,D,E,F
const newArray = newString.split(","); //['A', 'B', 'C', 'D', 'E', 'F']
console.log(newArray); 
*/


//ARRAY CONCATENATION: combine/joins two arrays into one array
/*
const myArrayA = ['A', 'B', 'C'];
const myArrayB = ['D', 'E', 'F'];
const newArray = myArrayB.concat(myArrayA); //['A', 'B', 'C', 'D', 'E', 'F']
const newArray1 = [myArrayB, myArrayA] //(2) [Array(3), Array(3)] (an array that has two nested array)
console.log(newArray);


//newer way to do concatenation using SPREAD OPERATOR (take the array and spread the elements out in the newer array)
newArray = [...myArrayA, ...myArrayB]; //['A', 'B', 'C', 'D', 'E', 'F'] (an array with values copied from other arrays)
console.log(newArray); 

*/


//Accessing Multi-dimensional Array

const equipShelfA = ["baseball", "football", "vollyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

//accessing elements of 1-D array
console.log(equipShelfA[1]); //football
//or
console.log(clothesShelfB[0]); //sweat tops

//nested arrays
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept); //(2) [Array(3), Array(3)]
console.log(clothesDept); //(2) [Array(3), Array(3)]

//accessing individual elements from nested arrays
//first identify array and then tell which particular element you want
console.log(equipDept[0][1]); //footballs
console.log(clothesDept[0][1]); //sweet tops



//3-D Array

//nesting 2D to 3D
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore); //(2) [Array(2), Array(2)]

//accessing individual element
console.log(sportsStore[0][0][1]); //football
console.log(sportsStore[1][1][0]); //sweet tops




