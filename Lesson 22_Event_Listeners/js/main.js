//Event Listeners

//Syntax: addEventListener("event", eventHandlingFunction, useCapture)
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
   const view3 = document.querySelector("#view3");
   const myForm = view3.querySelector("#myForm");
   
   //by default, when submit button is clicked, the page reload again and that's what we don't want (prevent default behavior).
   myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
   });


}

