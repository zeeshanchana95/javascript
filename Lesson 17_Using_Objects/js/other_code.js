
/*
//comes in key-value pairs in curly braces
const myObj = {name: "Zeeshan"}
console.log(myObj); //{name: "Zeeshan"}

//access particular key of boject
console.log(myObj.name); //Zeeshan
*/

/*

//objects comes in key-value pairs in curly braces
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afernoon: "Iced Tea" 
    },
    action: function() {
        return `Times for ${this.beverage.morning}`;
        //this -> reffers to the object
    }
}
console.log(anotherObj.alive); //true
console.log(anotherObj.answer); //42
console.log(anotherObj.hobbies[0]); //Eat

//can also use obj["propertyName"] to access particular property value
console.log(anotherObj["alive"]); //true
console.log(anotherObj.beverage.morning); //Coffee

//call methods using objects
console.log(anotherObj.action()); //Time for Coffee

*/


/*
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrrooom!";
    }
}

//Inheritance: Use base object and create other object, then we can add other properties
//creating another object by keeping other object as a base (Inheritance)
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); //{door: 2}
console.log(truck.wheels); //4
console.log(truck.engine()); //Vrrooom!
const car = Object.create(vehicle);
car.doors = 4
car.engine = function () {
    return "Whoosh";
}
console.log(car.engine()); //Whoosh
console.log(car.wheels); //4

*/


/*

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrrooom!";
    }
}

//Inheritance: Use base object and create other object, then we can add other properties
//creating another object by keeping other object as a base (Inheritance)

const car = Object.create(vehicle);
car.doors = 4
car.engine = function () {
    return "Whoosh";
}
console.log(car.engine()); //Whoosh
console.log(car.wheels); //4

const tesla = Object.create(car);
console.log(tesla.wheels); //5
tesla.engine = function() { return "Shhhh...." };
console.log(tesla.engine()); //Shhhh....

*/


/*

const band = {
    vocals : "Robert Plant",
    guitar : "Jimmy Page",
    bass   : "John Paul Jones",
    drums  : "John Bonham"
};

//delete an existing property or value
delete band.drums;

//check whether object contains particular property
console.log(Object.hasOwnPropety("drums")); //false

//get all the keys of the "band" object
console.log(Object.keys(band));

//get all the values of the "band" object
console.log(Object.values(band));

//for-in loop to get all keys and values of object
for(let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`); 
}
*/


/*
//destructuring objects: 

//extracting value from object to a new variable
const {guitar: myVariable1} = band; //defining "myVariable" and pulling the value of "guitar" from "band" object
console.log(myVariable1); //Jimmy Page

//extracting more than one variable
const {guitar: myVariable, bass:myBass} = band; //defining "myVariable" and pulling the value of "guitar" from "band" object
console.log(myVariable); //
console.log(myBass); //

//if want to keep the names of the variables same of the actual object, then use "keys names in the actual object"
//creating four variables
const {vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);

*/