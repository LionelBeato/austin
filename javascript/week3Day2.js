function myFunc(x) {
    return x;
}

let myArgument = "hello world"

console.log(myFunc("hello world"));



let add = function (a, b) { return a + b };

// notHoisted(); 

// function assignment
// let notHoisted = function() {
//     console.log("bar"); 
// }

hoisted();

// function declaration
function hoisted() {
    let x = 4;
    x++;
    console.log(x);
    console.log("foo")
}

let calculator = {
    key: "value",
    add: function (a, b) {
        return a + b;
    }
}

console.log(`This is the value of 2 plus 3: ${calculator.add(2, 3)}`);

let globalVariable = 5;

let myOtherFunc = function () {
    let localVariable = 4;
    return localVariable;
}

console.log(`This value comes from a function: ${myOtherFunc()}`);

// IIFE
// immediate invoked functional expression
(function () {
    let myVar = "inside an immediately invoked function"
    console.log(myVar);
})();


let city = "Austin";
let greet = function () {
    console.log('Hello ' + city);
}

// closures will allow us to access the scope of its parent scope

function outer() {
    let x = `x`;

    function inner() {
        let y = `y`;
        console.log(x);
    }

    inner();

    console.log(x);


}

greet();

outer();

let name = `David`;
let printName = function () {
    name = `Matt`; // this is mutating the original value of David
    console.log(name);
}

console.log(name); // this still referenes that original value
printName(); // this not only prints the name but mutates the original value, causing a side effect
console.log(name); // this prints out the mutated value

let teacher = {
    teacherName: `Lionel`,
    sayName: function() {
        console.log(this.teacherName); 
    }
}

teacher.sayName(); 

function sayNameGeneric() {
    console.log(this.teacherName);
}

let teacher1 = {
    teacherName: `Joe`,
    speak: sayNameGeneric
}
let teacher2 = {
    teacherName: `Susan`,
    speak: sayNameGeneric
}

teacher1.speak(); 
teacher2.speak();

function sum(x, y, z) {
    return x + y + z; 
}

const numbers = [1, 2, 3];

function otherSum(...rest) {
    return rest.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(...numbers));

console.log(otherSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
