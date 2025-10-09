// // 1. Array Manipulation
// var arr = ["a", 1, true];

// var arr = [];
// arr[0] = "Bugon";
// arr[1] = "Sir";
// arr[2] = "Risay";

// console.log(arr);

// // 2. Remove Array Element
var myArray = ["Bugon", "Sir", "Risay"];
// arr[1] = undefined;
// console.log(myArray);

// // 3. Show Array Element
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// 4. Built in method array
// 4.1 Join
console.log(myArray.join("-")); //  Make array into string with separator

// 4.2 Push & Pop
myArray.push("Nguyen", "Tran Ha");
console.log(myArray.join("-"));

myArray.pop();
console.log(myArray.join("-"));

myArray.pop();
console.log(myArray.join("-"));

// 4.3 unshift & shift
myArray.unshift("Doddy");
console.log(myArray.join("-"));
myArray.shift();
console.log(myArray.join("-"));

// 4.4 splice
// splice(initialIndex, howManyToRemove, newElement1, newElement2, ...)
// myArray.splice(2, 0, "Doddy", "Agamemnon");
// myArray.splice(1,2, 'Doddy', 'Fitri');
myArray.splice(1,2);
console.log(myArray.join("-"));

// 4.5 slice
// slice(initialIndex, lastIndex);

var arr = ['Bugon', 'Sir', 'Risay', 'Agamemnon', 'Ditya'];
var arr2 = arr.slice(1,3); // this will slice index 1 & 2 (only takes 2 index & create new array)
console.log(arr.join("-"));
console.log(arr2.join("-"));
