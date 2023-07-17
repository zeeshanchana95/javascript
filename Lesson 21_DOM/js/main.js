//DOM - Document Object Model

//SELECT ELEMENT WITH Id:
const view1 = document.getElementById('view1');
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
//changing styles
//showing first view and hiding second view: USED IN SINGLE PAGE APPLICATIONS where you need to show one view at a time
view1.style.display = "flex";
view2.style.display = "none"


//SELECT ELEMENT WITH ClassName:
const view = document.getElementsByClassName('view');
console.log(view); //return html collection 
const sameViews = document.querySelectorAll('.view');
console.log(sameViews);

//SELECTING ELEMENTS
//with querySelectorAll
const divs = view1.querySelectorAll("div"); //return NodeList(12)
console.log(divs);
//with TagName
const smaDivs = view1.getElementsByTagName("div");
console.log(smaDivs); //return HTMLCollection(12)

//select even divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs); //NodeList(6)

//alter page (document/webpage): change style of evenDivs
for (let i = 0; i<evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector('nav h1');
console.log(navText);   //<h1>My Page</h1>
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>`   //insert html with innerHTML
console.log(navbar);
navbar.style.justifyContent = "space-between"; //keep elements on left and right side


//navigating the DOM Tree

//display all elements
console.log(evenDivs);//NodeList(6)

//display one element
console.log(evenDivs[0]);//<div style="background-color:darkblue;">2</div>

//display element parent
console.log(evenDivs[0].parentElement); //<section></section>

//display the childrens of the element's parent
console.log(evenDivs[0].parentElement.children); //HTMLCollection(12)
console.log(evenDivs[0].parentElement.childNodes); //NodeList(25) -> including text nodes

//check child nodes
console.log(evenDivs[0].parentElement.hasChildNodes()); //true -> 

//get last child
console.log(evenDivs[0].parentElement.lastChild()); //#text

//last element child
console.log(evenDivs[0].parentElement.lastElementChild()); //<div "style:background-clor:darkblue;">12</div> 

// first child
console.log(evenDivs[0].parentElement.firstChild()); //<div "style:background-clor:darkblue;">12</div> 

// first element child 
console.log(evenDivs[0].parentElement.firstElementChild()); //<div "style:background-clor:darkblue;">12</div> 

// next sibling 
console.log(evenDivs[0].nextSibling()); //#text

// next Element sibling 
console.log(evenDivs[0].nextElementSibling()); //div3

// previous sibling 
console.log(evenDivs[0].previousSibling()); //#text

// previous Element sibling 
console.log(evenDivs[0].previousElementSibling()); //div3

//we can also chain multiple functions together
console.log(evenDivs[0].previousElementSibling().nextElementSibling()); //div3


//show view2 and apply styles
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


//Useful for application that is dynamically built when you need to clearout a section or the entire page and then add new content

//remove all children inside view2 (removing all nodes). completely clearout the page or section of the page.
while(view2.lastChild){
    view2.lastChild.remove();
}

//adding new elements to page 
const createDivs = (parent, iterator) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter; //number each different square we create

    //apply styles
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.dislay = "flex";
    newDiv.style.justifyContent = "center"; //horizontal alignment
    newDiv.style.alignItems = "center" //vertical alignment
    
    //add new div to page
    parent.append(newDiv); 
}
//createDivs(view2, 10);

//creating divs using iterator
for(let i = 1; i<=12; i++){
    createDivs(view2, i);
}