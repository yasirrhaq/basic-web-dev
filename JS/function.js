// function declaration

showName("Bugon"); // Hoisting concept

function showName(name) {
  console.log("Hi " + name);
}

// function expression -> can't use hoisting concept

var showName = function (name) {
  console.log("Hi " + name);
};

showName("Bugon");
