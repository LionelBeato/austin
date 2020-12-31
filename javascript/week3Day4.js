// we are going to be manipulating the DOM or Document Object Model

let el = document.getElementById(`username`);
let header = document.getElementById(`header`);

let allHeaders = document.getElementsByTagName(`h1`);

let firstButton = document.querySelector(`button`);
let links = document.querySelectorAll(`a`);


console.log(`hello`);
console.log(header.innerHTML);
console.log(allHeaders);
// console.log(allHeaders.length);

console.log(firstButton);
console.log(links);

let listItems = document.querySelector(`#myList`).children;

let div = document.querySelector(`ul`).parentElement;
let secondLi = document.querySelector(`li`).nextElementSibling;

console.log(listItems);
console.log(div);
console.log(secondLi.innerHTML);

let firstHeader = document.querySelector(`h1`);
firstHeader.innerText = `Hello Austin`;

let a = document.querySelector(`a`);
a.target = "_blank";

console.log(a.href);

a.remove();

let newLi = document.createElement(`li`);

let ul = document.querySelector(`ul`);
ul.appendChild(newLi);

newLi.innerText = `item 3`;

firstHeader.addEventListener('click', (event) => {
    alert(`clicked!`);
    console.log(event);

});



