// *
// **
// ***
// ****
// *****
var s = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

// #####
// ####
// ###
// ##
// #

var t = "";
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    t += "#";
  }
  t += "\n";
}

console.log(t);
