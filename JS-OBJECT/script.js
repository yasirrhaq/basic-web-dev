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

// function Student(name, energy) {
//   let student = Object.create(studentBehaviour);

//   student.name = name;
//   student.energy = energy;
//   return student;
// }

// let bugon = Student("Bugon", 100);
// let nogub = Student("Nogub", 200);

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

// prototype

// function Student(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }

// let yasir = new Student("Yasir", 10);

// Student.prototype.eat = function (portion) {
//   this.energy += portion;
//   return `${this.name} eating ${portion} meals`;
// };

// Student.prototype.play = function (hours) {
//   this.energy -= hours;
//   return `${this.name} playing ${hours} hours`;
// };

// Student.prototype.sleep = function (hours) {
//   this.energy += hours * 2;
//   return `${this.name} sleeping ${hours} hours`;
// };

// versi class

class Student {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(portion) {
    this.energy += portion;
    return `${this.name} eating ${portion} meals`;
  }

  play(hours) {
    this.energy -= hours;
    return `${this.name} playing ${hours} hours`;
  }

  sleep(hours) {
    this.energy += hours * 2;
    return `${this.name} sleeping ${hours} hours`;
  }
}

let bugon = new Student('Bugon', 10);

