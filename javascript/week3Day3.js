// you can have functions as arguments

function add(number1, number2) {
    return number1 + number2;
}

function doMath(operation, number1, number2) { // functions can be declared as parameters
    return operation(number1, number2); // you can indeed return functions
}

let x = 4;

// doMath is utilized as a higher order function HOF
// add is a callback because it has been passed as an argument
// console.log(doMath(add, 1, 2));

let students = [
    { name: `Lennon`, average: 90 },
    { name: `Starr`, average: 58 },
    { name: `McCartney`, average: 82 }
];

// let passingStudents = students.filter(function(student){
//     return student.average > 60; 
// });

let passingStudents = students.filter(student => student.average > 60);
let foundStudent = students.find(student => student.average > 50);

let otherStudents = [
    { firstName: `Cam`, lastName: `Newton` },
    { firstName: `Jenny`, lastName: `Lopez` },
    { firstName: `Dua`, lastName: `Lipa` },
]

let fullNames = otherStudents.map(student => `${student.firstName} ${student.lastName}`);

console.log(passingStudents);
console.log(foundStudent);
console.log(fullNames);


setTimeout(() => console.log(`later`), 2000);
console.log(`now`);
console.log(`a bit later`);
console.log(`...waiting`);

let teacher = { name: `Shane` };

let speak = function (item1, item2) {
    console.log(this.name, item1, item2);
}

speak.call(teacher, `coffee`, `ramen`);
speak.apply(teacher, [`coffee`, `ramen`]);


// let newTeacher = {
//     name: `Jimmy`,
//     speak: function () {
//         let boundFUnction = function () {
//             console.log(`my name is ${this.name}`)
//         }.bind(this);
//         setTimeout(boundFUnction, 1000); 
//     }
// }


let newTeacher = {
    name: `Jimmy`,
    speak: function () {
        let boundFUnction = () => {
            console.log(`my name is ${this.name}`)
        };
        setTimeout(boundFUnction, 1000); 
    }
}



newTeacher.speak();



