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
const studentBehaviour = {
  eat: function (portion) {
    this.energy += portion;
    console.log(`Welcome! Eat Well ${this.name} <3`);
  },

  play: function (playtime) {
    this.energy -= playtime;
    console.log(`Happy play!`);
  },

  sleep: function (rest) {
    this.energy += rest * 2;
    console.log(`Sleep weel! ${this.name}`);
  },
};

function Student(name, energy) {
  let student = Object.create(studentBehaviour);

  student.name = name;
  student.energy = energy;
  return student;
}

let bugon = Student("Bugon", 100);
let nogub = Student("Nogub", 200);

// constructor function

// function Student(name, energy) {
//   this.name = name;
//   this.energy = energy;
//   this.eat = function (portion) {
//     this.energy += portion;
//     console.log(`Welcome! Eat Well ${this.name} <3`);
//   };

//   this.play = function(playtime){
//     this.energy -= playtime;
//     console.log(`Happy play!`);
//   }
// }

// let bugon = new Student('Bugon',100);
