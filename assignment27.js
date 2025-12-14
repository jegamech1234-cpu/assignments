// ```js
// 1- array of matrix
// find the highest and lowest values without using Math.min  or Math.max
// Ans:
const matrix = [
  [10, 22, 5],
  [99, 1, 45],
  [7, 15, 88],
];

let highest = matrix[0][0];

let lowest = matrix[0][0];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    const value = matrix[i][j];
    if (value > highest) highest = value;
    if (value < lowest) lowest = value;
  }
}
console.log("1-Highest value is:", highest);
console.log("1-Lowest value is:", lowest);

// 2-Given two arrays

// [1,2,3] [4,5,6] merge them into one array without using the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [];

for (let i = 0; i < array1.length; i++) {
  mergedArray.push(array1[i]);
}
for (let j = 0; j < array2.length; j++) {
  mergedArray.push(array2[j]);
}

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 3-
// Given an array  of names,
// count how  many names start with the letter 'A' using a loop

const names = ["Alice", "Bob", "Anna", "Mike", "Andrew"];
let count = 0;
for (let i = 0; i < names.length; i++) {
  if (names[i][0] === "A") {
    count++;
  }
}
console.log("Number of names starting with A:", count);

// 4-
// create a new array containing the only the numbers greater than 50 from the given array using a loop (not filter)

const numbers = [10, 55, 23, 67, 89, 45, 12];
const greaterThanFifty = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    greaterThanFifty.push(numbers[i]);
  }
}
console.log(greaterThanFifty); // Output: [55, 67, 89]

// 5- you have an array
// [10,20,30,40,50]
// reverse this array manually using a loop do not use reverse()

const arr = [10, 20, 30, 40, 50];
const reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr); // Output: [50, 40, 30, 20, 10]

// 6- Given an array of strings ,  convert all string to uppercase  using a loop (no map )

const fruits = ["apple", "banana", "cherry"];
const uppercasedFruits = [];
for (let i = 0; i < fruits.length; i++) {
  uppercasedFruits.push(fruits[i].toUpperCase());
}
console.log(uppercasedFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// 7- Given an array of numbers [5,10,15,20,25] create a new array  where each value is divided by 5

const nums = [5, 10, 15, 20, 25];
const dividedByFive = [];
for (let i = 0; i < nums.length; i++) {
  dividedByFive.push(nums[i] / 5);
}
console.log(dividedByFive); // Output: [1, 2, 3, 4, 5]

// 8-Given an array of ages , Count how many peoples are
// below 18
// between 18  and 60
// above 6

const ages = [12, 25, 17, 45, 60, 75, 8, 30];
let below18 = 0;
let between18And60 = 0;
let above60 = 0;

for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 18) {
    below18++;
  } else if (ages[i] >= 18 && ages[i] <= 60) {
    between18And60++;
  } else {
    above60++;
  }
}
console.log("Below 18:", below18);
console.log("Between 18 and 60:", between18And60);
console.log("Above 60:", above60);

// 9-Loop through an array of objects
// [ {name:"Ravi", age:"16"}, {name:"Akash",age:"22"}, { name:"Mani", age:"30"} ]
// print the name of peoples whose age is above 18

const people = [
  { name: "Ravi", age: 16 },
  { name: "Akash", age: 22 },
  { name: "Mani", age: 30 },
];
for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18) {
    console.log(people[i].name);
  }
}

// 10- Given an array of mixed data types
//     [10,"hello", true, 50,"js",99]

const mixedArray = [10, "hello", true, 50, "js", 99];

// create a new array containing only the numbers from the given array using a loop
const numbersOnly = [];
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    numbersOnly.push(mixedArray[i]);
  }
}
console.log(numbersOnly); // Output: [10, 50, 99]

// ```
