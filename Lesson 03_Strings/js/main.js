//Strings
const myVariable = "Mathematics";

//the length property -> return no of characters in the stirng
console.log(myVariable.length); 


//String methods

//return character at the specified position
console.log(myVariable.charAt(0)) //M


//return position of first occurance within string
console.log(myVariable.indexOf('mat')) //5


//provide position of last occurance of the specified string
console.log(myVariable.lastIndexOf('at')) //6


//take starting and ending position and returns the characters from the starting position to the ending position where last index is excluded
console.log(myVariable.slice(5, 8)) //mat

//if ending parameter not provided, will return characters from starting to the end of string
console.log(myVariable.slice(5)) //matics

//if ending parameter's position is less than or equal to the staring parameter, nothing will be returned.
console.log(myVariable.slice(5,2)) //

//if ending parameter's position is one higher than the staring parameter, only the character at the starting position will be returned.
console.log(myVariable.slice(5,6)) //m


//return string in UPPER CASE
console.log(myVariable.toUpperCase()) //MATHEMATICS
 
//return in lowercase
console.log(myVariable.toLowerCase()) //mathematics

//return boolean data, if characters of group of characters are not inside the provided string, return false, true otherwise.
console.log(myVariable.includes('div')) //false
console.log(myVariable.includes('mat')) //true

//split the string from the character we assigned and the resulting multiple strings within an array, where provided character will be not included in the result..
console.log(myVariable.split("e")) //["Math", "matics"]

//providing "" will split string into individual characters
console.log(myVariable.split("")) //["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]

//if provide string contains comma separated words, it will return individual words in array when give "," in split()
console.log("Zeeshan,Ahmed,Channa".split(",")) //(3) ['Zeeshan', 'Ahmed', 'Channa']]

//if provide string contains SPACE separated words, it will return individual words in array when give " " in split()
console.log("Zeeshan Ahmed Channa".split(" ")) //(3) ['Zeeshan', 'Ahmed', 'Channa']]

 





