/*

const playGuitar = () => {
    return "Playing guitar";
}

const shreadding = () => {
    return "Shreadding some licks!";
}

const plucking = () => {
    return "Plucking the strings..";
}

//export function
//Method 01: default export
//every file must have one "default export"
export default playGuitar;
//we can export other functions
export {shreadding, plucking};

*/



/* 
//Modules

//Importing exported functions

//relative path: path with . (dot) -> import playGuitar from "./guitars";
//absolute path : path without . (dot) -> import playGuitar from "guitars";
import playGuitar from "./guitars";
import { shreadding, plucking } from "./guitars";

console.log(playGuitar()); //Playing Guitar
console.log(shreadding()); //Shreading some licks!
console.log(plucking()); //Plucking the strings..
*/

/* 
//we aslo rename exported functions
import playGuitar from "./guitars";
import { shreadding as shred, plucking as fingerpicking} from "./guitars";

console.log(playGuitar()); //Playing Guitar
console.log(shred()); //Shreading some licks!
console.log(fingerpicking()); //Plucking the strings..
 */

/*
import User from './user.js'

const me = new User("email@gmail.com", "Zeeshan");
console.log(me);
console.log(me.greeting());
*/

 