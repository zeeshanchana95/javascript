export default class User {
    constructor(email, name) {
        this._id = email;
        this._name = name;
    }

    greetings(){
        return `Hi, my name is ${this.name}.`;
    }
}