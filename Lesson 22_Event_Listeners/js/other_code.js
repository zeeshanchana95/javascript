/*

//Event Listeners

const view = document.querySelector("#view");
const idv = view.querySelector("div");
const h2 = div.querySelector("h2");

//Syntax: addEventListener("event", eventHandlingFunction, useCapture)

//define function
const doSomething = () => {
    alert("Doing something");
}

//add doSomething event listener fuction to h1
h2.addEventListener("click", doSomething, false);

//remove event Listener function from h2
h2.removeEventListener("click", doSomething, false);


//add anonymous function (we can't remove anonymous functions)
h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked"; //change text of target element where click event is performed
});
//OR
h2.addEventListener("click", function(event) {
    console.log(event.target);
    event.target.textContent = "Clicked"; //change text of target element where click event is performed
});

*/


/*


//EVENT BUBBLING: 
//if use "false" then element to which event triggered is nested inside other elements, then that innermost element will bubble or trigger events on outer elements
//false -> we are not going to use capture means we prefer event bubbling
//that is default behaviour of triggering events in js
//if value set to "true" then events start triggering from top and go to bottom
const initApp = () => {
    const view = document.querySelector("#view");
    const idv = view.querySelector("div");
    const h2 = div.querySelector("h2");
    
    view.addEventListener("click", (event) => {
        event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, true); 

    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, true);
    
    h2.addEventListener("click", (event) => {
        event.target.textContent = "clicked"
    }, true);
}


//stopPropogation(): 

*/


/*

//EVENT BUBBLING: 
//if use "false" then element to which event triggered is nested inside other elements, then that innermost element will bubble or trigger events on outer elements
//false -> we are not going to use capture means we prefer event bubbling
//that is default behaviour of triggering events in js
//if value set to "true" then events start triggering from top and go to bottom
const initApp = () => {
    const view = document.querySelector("#view");
    const idv = view.querySelector("div");
    const h2 = div.querySelector("h2");
    
    view.addEventListener("click", (event) => {
        // event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, false); 

    div.addEventListener("click", (event) => {
        event.stopPropagation();
        div.style.backgroundColor = "blue";
    }, false);
    
    h2.addEventListener("click", (event) => {
        // event.stopPropagation();
        event.target.textContent = "clicked"
    }, false);
}

//stopPropogation(): stop the behaviour of bubbling 

*/




/*

 const view = document.querySelector("#view");
    const idv = view.querySelector("div");
    const h2 = div.querySelector("h2");
    
    view.addEventListener("click", (event) => {
        // view.classList.add("purple");
        // view.classList.remove("darkblue");
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false); 

    div.addEventListener("click", (event) => {
        div.classList.toggle("black");
        div.classList.toggle("blue");
    }, false);
    
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" 
        ? event.target.textContent = "Clicked" 
        : event.target.textContent = "My 2nd View"
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
         event.target.classList.add("height100");
    });

    nav.addEventListener("mouseout", (event)=> {
        event.target.classList.remove("height100");
    });


*/