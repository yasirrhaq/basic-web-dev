function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function flexibleAdd() {
  var result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

var test = flexibleAdd(1,2,3,4);
console.log(test);