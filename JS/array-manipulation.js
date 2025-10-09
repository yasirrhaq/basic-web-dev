// // // 1. Array Manipulation
// // var arr = ["a", 1, true];

// // var arr = [];
// // arr[0] = "Bugon";
// // arr[1] = "Sir";
// // arr[2] = "Risay";

// // console.log(arr);

// // // 2. Remove Array Element
// var myArray = ["Bugon", "Sir", "Risay"];
// // arr[1] = undefined;
// // console.log(myArray);

// // // 3. Show Array Element
// // for (let i = 0; i < myArray.length; i++) {
// //     console.log(myArray[i]);
// // }

// // 4. Built in method array
// // 4.1 Join
// console.log(myArray.join("-")); //  Make array into string with separator

// // 4.2 Push & Pop
// myArray.push("Nguyen", "Tran Ha");
// console.log(myArray.join("-"));

// myArray.pop();
// console.log(myArray.join("-"));

// myArray.pop();
// console.log(myArray.join("-"));

// // 4.3 unshift & shift
// myArray.unshift("Doddy");
// console.log(myArray.join("-"));
// myArray.shift();
// console.log(myArray.join("-"));

// // 4.4 splice
// // splice(initialIndex, howManyToRemove, newElement1, newElement2, ...)
// // myArray.splice(2, 0, "Doddy", "Agamemnon");
// // myArray.splice(1,2, 'Doddy', 'Fitri');
// myArray.splice(1, 2);
// console.log(myArray.join("-"));

// // 4.5 slice
// // slice(initialIndex, lastIndex);

// var arr = ["Bugon", "Sir", "Risay", "Agamemnon", "Ditya"];
// var arr2 = arr.slice(1, 3); // this will slice index 1 & 2 (only takes 2 index & create new array)
// console.log(arr.join("-"));
// console.log(arr2.join("-"));

// 5 foreach

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

numbers.forEach(function (e) {
  console.log(e);
});

numbers.forEach(function (e, i) {
  console.log("index-" + (i + 1) + " value = " + e);
});

// 6. map -> will return as array meanwhile forEach doesn't return array.

var anotherNumbers = numbers.map(function (e) {
  return e * 2;
});

console.log(anotherNumbers.join("-"));

// 7. sort -> sort() will only check the first character of numbers, by adding return a-b it will sort correctly.
unsortedNumbers = [1, 23, 677, 345, 34];
unsortedNumbers.sort(function (a, b) {
  return a - b;
});
console.log(unsortedNumbers.join("-"));

// 8. filter

var num = [1,23,5,6,7213,64,32,69];
var num2 = num.filter(function (x){
    return x > 5;
});

console.log(num2.join('-'));

// 8.1 find -> not resulting in array but only a value.

var num = [1,23,5,6,7213,64,32,69];
var num2 = num.find(function (x){
    return x > 5;
});

console.log(num2);
