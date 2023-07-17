//JavaScript Classes


//classes now suport public and private fields in js and they must be declared above the constructor
//public and private can be accessed inside the class but outside of class, public fields only be accessible

//Parent class (more general)
class Pizza {
    crust = "orignal"; //public field
    #sauce = "traditional"; //private field
    #size;
    constructor(pizzaSize){
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo(){
        console.log(`Here's is your ${crust} ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
    }
}

const myPizza = new Pizza("Large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.sauce); //undefined
// console.log(myPizza.#sauce); //Error
