document.getElementById("#main-title");
document.querySelector(".list-item");
document.querySelector("ul li:first-of-type");
const ul =  document.querySelector('ul');
ul.querySelector('li');
//////////////////////////////////////////
const  h1 = document.querySelector("h1");
console.log(h1.textContent);
console.log(h1.className);
h1.textContent = "Some New Text";
h1.className = "title";
// some style 
h1.style.color = "blue";
h1.style.backgroundColor ="yellow";
console.dir(h1);
console.log("You Cn search mdn h1 element");
///////////////////////////////////////////////
// Attribute  VS  property 
const input  = document.querySelector("input");
console.dir(input);
// set property in js &  update in UI & NOT update in value attribute DOM  
input.value = "SOME OTHER VALUE";
// updating in javascript property Not in UI BUT Updated in attribute value DOM
input.setAttribute('value' ,'some other Defalut text'); 
console.log("AFTER setAttribute => " , input.value);
// to resolve  setAttrbuite and a update UI  use  getAttribute
input.value = input.getAttribute("value");
///////////////////////////////////////////////////
// Selecting  multiple elements

const ListItemElements = document.querySelectorAll('li');
const ListItemElements = document.getElementsByTagName('li');

console.log(ListItemElements);
console.log(ListItemElements[0]);
console.log(ListItemElements[1]);
for (const ListItemEl of ListItemElements) {
    console.dir(ListItemEl);
}

const  h1 = document.getElementById("h1");
console.log(h1.textContent);
h1.textContent = "Some New Text again ..";
h1.style.color ='white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent +'Changed';
//////////////////////////////////////////////////////////
// Traversing the DOM
// Deeplynsted traversal logic will most likelyalso not yield any performance benefits or even performance worse
const ul = document.querySelector('ul');
console.log(ul.children); // all nodes without textNodes "White space betwen tags space"
console.log(ul.children[1]);
console.log(ul.childNodes); // all nodes and textnodes in whitespace
console.log(ul.firstChild); // li in first item 
console.log(ul.firstElementChild); // equal firstchild
console.log(ul.lastChild);
console.log(ul.lastElementChild);

const liFirst = document.querySelector('li');
console.log(liFirst.parentNode);
console.log(liFirst.parentElement);
console.log(liFirst.closest('body')); // closest(css selector)

console.log(liFirst.parentElement);
const ul =  liFirst.parentElement; // access ul like document.queryselector(ul)
console.log(ul.previousSibling); //access node text "white space " NOT header element
console.log(ul.previousElementSibling); //access the header element not Node text "White space"
console.log(ul.nextSibling); // Node after ul node text "white space"
console.log(ul.nextElementSibling); //access input text NOT Node text "white space"

// before ADD Section Tag
const ul = document.body.firstElementChild.nextElementSibling;
console.log(ul);
const firstLi =  firstLi.firstElementChild;
console.log(firstLi);
///////////////////////////////////////////////////////////////////////////
// Styling DOM Elements
const section = document.querySelector('section');
section.style.backgroundColor = 'green';// inline style higher peorty //will add attrubite style background:green;
section.className = ''; //remove any class in element
section.className = 'red-bg';
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    // if ( section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }
// section.classList.toggle('visible');
section.classList.toggle('invisible');
});

//////////////////////////////////////////////////////////////////////

// Creating & Inserting Elements

const section = document.querySelector('section');
console.log(section.textContent);
console.log(section.innerHTML);
section.textContent = 'New content';
section.innerHTML = '<h2>A New title</h2>';

const list = document.querySelector('ul');
list.innerHTML =  list.innerHTML + '<li>Item 4</li>'; // super bad //super bad experince //rerender all content html element 
// correct soluation
const div = document.querySelector('div');
//position
//add new content in exists element 
div.insertAdjacentHTML('beforeend' ,'<p> Somethig wrong !</p>');

const list = document.querySelector('ul');
const newLi = document.createElement('li');
console.log(newLi);
list.appendChild(newLi);
list.append('sometext'); //append() take text , another vs appendChild you can search
newLi.textContent = 'Item 4';
newLi.style.backgroundColor = 'blue';
list.prepend(newLi); // prepend element first content 
list.lastElementChild.before(newLi);//  before last element in ul
list.lastElementChild.after(newLi);//  after last element in ul
list.lastElementChild.replaceWith(newLi);//  replace with first element in ul

const list = document.querySelector('ul');
const secondLi = list.children[1];
const newLi = document.createElement('li');
newLi.textContent = 'Item 5';
secondLi.insertAdjacentElement('afterend',newLi);
newLi2 = newLi.cloneNode(true); // copy node 
list.append(newLi ,newLi2);


const list = document.querySelector('ul');
const listItems = list.querySelector('li');
console.log(listItems);
const listItems2 =  list.getElementsByTagName('li');
console.log(listItems2);

const list = document.querySelector('ul');
list.remove(); // remove ul from DOM in webpage 
list.parentElement.removeChild(list); //remove ul from dom in webpage 


