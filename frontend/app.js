// let arr=[1,2,3]
// arr.sayHello  = ()=>{
//     console.log(`hello`)
// }

// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hello my name is ${this.name}`);
//     },
//   };

//   return person;
// }

////////////////////
// Constructors - Start with capital laters, dosn't return anythig
// function Person(name, age) {
//     this.name= name,
//     this.age= age
//     };
// let p1 = new Person('ali', 19)
// let p2 = new Person('hassan', 24)

/////////////////////

// class Person{
//     constructor(name, age){
//         this.name= name;
//         this.age= age;
//     }

//     talk(){
//         console.log(`Hi! My name is ${this.name}`)
//     }
// }

// let p1 = new Person('Hamzah', 22)
// let p2 = new Person('Hamzah', 22)

////////////////////////////////////

// // Inheritance
// class Person {
//   constructor(name, age) {
//     console.log(`Person constructor called`)
//     this.name = name;
//     this.age = age;
//   }

//   talk() {
//     console.log(`Hi my name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     console.log(`Student constructor called`)
//     super(name, age);       // Parent class constructor is being called
//     this.marks = marks;
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age);       // Parent class constructor is being called
//     this.subject = subject;
//   }
// }

// 2
class Mamals {
  constructor(name) {
    this.type = "warm blooded";
    this.name = name;
  }

  eat() {
    console.log(`I am eating!`);
  }
}

class Dog extends Mamals {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("I am kutta🐕");
  }
}

class Cat extends Mamals {
  constructor(name) {
    super(name);
  }

  meaw() {
    console.log(`I am biili😺`);
  }
}
