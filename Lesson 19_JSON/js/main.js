//JSON - used to send and receive data in any language


const myObj = {
    name: "Zeeshan",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
}
console.log(myObj);             //{name: 'Zeeshan', hobbies: Array(3), hello: ƒ}
console.log(myObj.name);        //Zeeshan
myObj.hello();                  //Hello!
console.log(typeof myObj);      //object


//send request to server -> need to convert javascript object to json object
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);          //{"name":"Zeeshan","hobbies":["eat","sleep","code"]}
console.log(typeof sendJSON);   //string
console.log(sendJSON.name);     //undefined (due to string but not object)

//receive object -> need to convert into javascript object to access properties and methods
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);       //{name: 'Zeeshan', hobbies: Array(3)}
console.log(typeof receiveJSON);//object