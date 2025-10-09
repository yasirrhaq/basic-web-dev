function printNumber(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printNumber(n - 1);
}

// printNumber(10);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));