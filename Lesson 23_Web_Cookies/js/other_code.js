/*

// window.alert("Ok");
// alert

// return url of website
// window.alert(window.location); 
// alert(location);

// window.localStorage
// window.sessionStorage

*/


//session storage

/*

const myObject = {
    name: "Zeeshan",
    logName : function() {
        console.log(this.name);
    }
}

const myArray = ['eat', 'sleep', 'code'];

sessionStorage.setItem("mySessionStore", myObject);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData); //[object object]
console.log( typeof mySessionData); //string




//Session Storage: 

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Zeeshan",
    hobbies: ['eat', 'sleep', 'code'],
    logName : function() {
        console.log(this.name);
    }
}

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); //{name: 'Zeeshan', hobbies: Array(3)}



//Session Storage: 

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Zeeshan",
    hobbies: ['eat', 'sleep', 'code'],
    logName : function() {
        console.log(this.name);
    }
}

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); //(3) ['eat', 'sleep', 'code']

*/


/*
//Local Storage

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Zeeshan",
    hobbies: ['eat', 'sleep', 'code'],
    logName : function() {
        console.log(this.name);
    }
}

localStorage.setItem("myLocalStore", JSON.stringify(myArray));

//remove item
localStorage.removeItem("myLocalStore");

//clear all data
localStorage.clear();

//return key
const key = localStorage.key(0);

//find out how many items stored in the storage
//Note: there can be other storage items of other sites in local or session storage
const storeLength = localStorage.length;
console.log(storeLength); //1

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData); //null (means data or key doesn't exist)


*/