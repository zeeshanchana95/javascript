/*
class Pizza {
    constructor(){
        this.size = "medium";
        this.crust = "orignal"
    }
    bake () {
        console.log(`Baking a ${this.size} ${this.crust} crust pizza.`)
    }
}

const myPizza = new Pizza();
myPizza.bake(); //Baking a medium orignal crust pizza.
*/


/*

class Pizza {
    //passing parameter(s)
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "orignal"
    }
    bake () {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.type = "supreme";
myPizza.bake(); //Baking a small supreme orignal crust pizza.

//log a specific propety (But this is not desireable)
console.log(myPizza.type);//supreme

//we can change a value to a property using . dot notation

*/


/*
//using properties getter and setter
class Pizza {
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "orignal"
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake () {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "thin";
myPizza.bake(); //Baking a small pepperoni thin crust pizza.
console.log(myPizza.pizzaCrust); //thin

*/


/*
//using properties getter and setter
class Pizza {
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "orignal"
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings () {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping)
    }
    bake () {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olivers");
console.log(myPizza.getToppings()); //(2) ['sausage', 'olivers']

*/

/*
//Parent class (more general)
class Pizza {
    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = "orignal"
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

//child class (more specific)
class SpecialtyPiza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
    }
}

const mySpecialty = new SpecialtyPiza("medium");
mySpecialty.slice(); //Our The Works medium pizza has 8 slices

*/

/*
//Parent class (more general)
class Pizza {
    constructor(pizzaSize){
        this._size = pizzaSize; //private
        this._crust = "orignal"
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}

// Naming conventions
//  - for making properties private (to only accessible inside that particular class and use get and set methods to modify values) use _ in front of variable name. Example: this._size = pizzaSize;
*/



/*

//Factory Function: another way to create an object in js
function pizzaFactory(pizzaSize) {
    //private variables
    const crust = "orignal";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); //
*/

