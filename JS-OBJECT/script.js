// Object literal

let student = {
  name: "Bugon",
  energy: 100,
  eat: function (portion) {
    this.energy += portion;
    console.log(`Welcome! Eat Well ${this.name} <3`);
  },
};

// Function Declaration

// function Student(name, energy) {
//   let student = {};

//   student.name = name;
//   student.energy = energy;
//   student.eat = function (portion) {
//     this.energy += portion;
//     console.log(`Welcome! Eat Well ${this.name} <3`);
//   };

//   student.play = function(playtime){
//     this.energy -= playtime;
//     console.log(`Happy play!`);
//   }

//   return student;
// }

// let bugon  = Student('Bugon', 100);
// let nogub  = Student('Nogub', 200);

// constructor function 

function Student(name, energy) {
  this.name = name;
  this.energy = energy;
  this.eat = function (portion) {
    this.energy += portion;
    console.log(`Welcome! Eat Well ${this.name} <3`);
  };

  this.play = function(playtime){
    this.energy -= playtime;
    console.log(`Happy play!`);
  }
}

let bugon = new Student('Bugon',100);