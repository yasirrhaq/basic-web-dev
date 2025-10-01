// "use strict"; -> strict rules

// global scope / window scope
var a = 1;
var c = 1;

function test() {
  var b = 2;
  console.log(b); // show 2

  //   name conflict
  var a = 2;
  console.log(a); // access function scope
  console.log(window.a); // access global scope / windows scope

  c = 2; // replacing value in global scope

  d = 3; // automating create var d on global scope (if not using "use strict")
}

test();

console.log(b); // show b is undefined
