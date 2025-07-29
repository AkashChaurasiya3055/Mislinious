// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is${this.name}`);
//         },
//     };

//     return person;
// }

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.talk = function(){
//     console.log(`Hi, My name is ${this.name}`);
// };

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

let p1 = new Person("shiv",25);
let p2 = new Person("node",98);