// var firstName = "Baraa";

// firstName = "Shrouq"; // string

// var isMarried = false; // boolean

// var cost = 10;

// // if (condition) { block of code }

// if (cost < 5) {
//   console.log("I'll buy that chocolate");
// }

// if (isMarried == true) {
//   console.log("you are married");
// }

var age = 20; // number

// // loose comparison 20 == 20??
// if (age == 20) {
//   console.log("equals 20");
// }

// // strict comparison -> value + type
// if (20 === "20") {
//   console.log("triple equals 20");
// }

// loops
// i = i + 1;
// for (var i = 0; i < 5; i++) {
//   if (i === 0) {
//     console.log("i is zero");
//   } else {
//     console.log(i);
//   }
// }

// var color = "red";
// for (var i = 0; i <= 10; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// Find the sum of numbers from 1 to 5
// Count how many numbers from 1 to 10 are odd

// var count = 0;

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     // count?
//     count = count + 1; // count++
//   }
// }
// console.log(count);

var firstName = "Shereen";

var itemOne = "Phone";
var itemTwo = "Laptop";
var itemThree = "Cup of tea";
var itemFour = "Bottle of water";
var itemFive = "Mouse mat";

// many items
// wasteful

var array = [5, 3, 7, 12, 22, 4, 8, 1, 0, -1, 80, 44, -3, -14];

var lastIndex = 3;

// console.log(array[0]);

// console.log(array[array.length - 1]);

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Print only values greater than 5
// for (var i = 0; i < 50; i++) {
//   console.log(2 + 4);
// }

// hello github

var supercalafrajalistic = "Manar";

function hello(laptop) {
  console.log("hello " + laptop + "!");
}

function sum(x, y) {
  return x + y;
}

var number = sum(2, 4);
var numberTwo = sum(6, 6);
var numberThree = sum(number, numberTwo);
console.log(numberThree);
