//Web Cookies



//Local Storage: 
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

//find out how many items stored in the storage. Note: there can be other storage items of other sites in local or session storage
const storeLength = localStorage.length;
console.log(storeLength); //1

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData); //null (means data or key doesn't exist)



/*
const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Zeeshan",
    hobbies: ['eat', 'sleep', 'code'],
    logName : function() {
        console.log(this.name);
    }
}

localStorage.setItem("myLocalStore", JSON.stringify(myArray));

//find out how many items stored in the storage
//Note: there can be other storage items of other sites in local or session storage
const storeLength = localStorage.length;
console.log(storeLength); //1
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

*/