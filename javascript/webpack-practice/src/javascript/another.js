import moment from "moment";

let time = moment().format('LT');
 
 export function sayHello() {
    let header = document.querySelector("#greeting");
    let hello = (`<h1> hello class; i hope everything is going well, the time is ${time} </h1>`);
    header.innerHTML = hello;
}

sayHello();

// module.exports = sayHello(); 