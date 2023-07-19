//Modules

//Importing exported functions

/*
relative path: path with . (dot) -> import playGuitar from "./guitars";
absolute path : path without . (dot) -> import playGuitar from "guitars";

import playGuitar from "./guitars";
import { shreadding, plucking } from "./guitars";
*/

/* //we aslo rename exported functions
import playGuitar from "./guitars";
import { shreadding as shred, plucking as fingerpicking} from "./guitars"; */



//Import all exported functions 
import * as Guitars from "./guitars.js"


console.log(Guitars.playGuitar()); //Playing Guitar
console.log(Guitars.shreadding()); //Shreading some licks!
console.log(Guitars.plucking); //Plucking the strings..


//usually modules used in the project with the tool called "Babel", it transfere javascript (newwer) into older javascript syntax that will work in older browsers. That can be done using bundler "Webpack or parser" the project into one file that can read all of your modules and packages together in a big bundle
