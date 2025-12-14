// Level 1-Basic array operations(Beginner)

// 1.Create an array with 5 fruits and print it
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits);

// 2.Print the first and last element of an array

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 3.Find the length of an array
console.log("Number of fruits:", fruits.length);

// 4.Add an element at the end using push()
fruits.push("fig");
console.log(fruits);

// 5.Remove the last element using pop()
fruits.pop();
console.log(fruits);

// 6.Add an element at the beginning using unshift()
fruits.unshift("avocado");
console.log(fruits);

// 7.Remove the first element using shift()
fruits.shift();
console.log(fruits);

// 8.Change the second element of an array to a new value
fruits[1] = "blueberry";
console.log(fruits);

// 9.Combine two arrays using spread operator(...)

const tropicalFruits = ["mango", "pineapple"];
const allFruits = [...fruits, ...tropicalFruits];
console.log(allFruits);

// 10.Check if a value exists in an array using includes()
console.log("Contains banana?", allFruits.includes("banana"));
//
//
//
//
//
// Level 2 - Loops and conditions with array (Intermediate)

// 11.Print all elements of an array using a for loop
for (let i = 0; i < allFruits.length; i++) {
  console.log(allFruits[i]);
}

// 12.Print all elements using for...of
for (const fruit of allFruits) {
  console.log(fruit);
}

// 13.use forEach() to print each item with its index

for (let index = 0; index < allFruits.length; index++) {
  console.log(`Index ${index}: ${allFruits[index]}`);
}

// 14.Find the sum of numbers in an array
const numbers = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// 15.Find the maximum number in an array
let maxNum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
}
console.log("Maximum number is:", maxNum);

// 16.Count how many numbers are even
let countNum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > countNum) {
    countNum = numbers[i];
  }
}
console.log("Count of even numbers is:", countNum);

// 17.Create an array of marks: print "pass"if mark>= 35 for each

const marks = [45, 22, 67, 34, 89];
marks.forEach((mark) => {
  if (mark >= 35) {
    console.log(`Mark: ${mark} - Pass`);
  } else {
    console.log(`Mark: ${mark} - Fail`);
  }
});

// 18.Create an array of names and print only those starting with "A".
let names = ["Alice", "Bob", "Anita", "Charlie", "Arjun"];
names.forEach((name) => {
  if (name.startsWith("A")) {
    console.log(name);
  }
});

// 19.Reverse an array using reverse()
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log("Reversed array:", arr);

// 20.Sort an array of numbers in ascending order using sort()
const unsortedNumbers = [40, 10, 50, 20, 30];
unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted numbers:", unsortedNumbers);
//
//
//
//

// Level 3 - Array methods (map,filter,reduce,find)

// 21.use map() to create a new array with each element doubled

const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((num) => num * 2);
console.log("Doubled array:", doubledArray);

// 22.use filter() to create an array of only even numbers
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = mixedNumbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 23.use reduce() to find the total sum of numbers in an array
const nums = [10, 20, 30, 40, 50];
const totalSum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Total sum:", totalSum);

// 24.use find() to get the first number greater than 50.
const numArray = [10, 25, 55, 70, 30, 90];
const firstGreaterThan50 = numArray.find((num) => num > 50);
console.log("First number greater than 50:", firstGreaterThan50);

// 25.use some() to check if any number is greater than 100.
const checkNumbers = [10, 25, 55, 70, 30, 90];
const anyGreaterThan100 = checkNumbers.some((num) => num > 100);
console.log("Any number greater than 100?", anyGreaterThan100);

// 26.use Every () to check if all numbers are positive.
const positiveNumbers = [10, 25, 55, 70, 30, 90];
const allPositive = positiveNumbers.every((num) => num > 0);
console.log("All numbers are positive?", allPositive);

// 27.Convert all names in an array to uppercase() using Map()
const nameArray = ["alice", "bob", "charlie"];
const upperCaseNames = nameArray.map((name) => name.toUpperCase());
console.log("Uppercase names:", upperCaseNames);

// 28.Get only the marks >= 50 from [40,55,70,30,90]
const markArray = [40, 55, 70, 30, 90];
const marksAbove50 = markArray.filter((mark) => mark >= 50);
console.log("Marks >= 50:", marksAbove50);

// 29.Multiply all elements  by 10  and print the new array
const elements = [1, 2, 3, 4, 5];
const multipliedBy10 = elements.map((el) => el * 10);
console.log("Elements multiplied by 10:", multipliedBy10);

// 30.Find the average of numbers using reduce()
const averageNumbers = [10, 20, 30, 40, 50];
const sumOfNumbers = averageNumbers.reduce((acc, curr) => acc + curr, 0);
const average = sumOfNumbers / averageNumbers.length;
console.log("Average of numbers:", average);
//
//
//
// Level 4 - Nested & advanced array concepts

// 31.create a 2d array  for student marks  and print each row
const studentMarks = [
  [85, 90, 78],
  [88, 76, 92],
  [90, 91, 89],
];
for (let i = 0; i < studentMarks.length; i++) {
  console.log(`Student ${i + 1} marks:`, studentMarks[i]);
}

// 32.Access the element  [1] [2] from a 2D array
const element = studentMarks[1][2];
console.log("Element at [1][2]:", element);

// 33.  Flatten a nested array [[1,2],[3,4],[5,6]] to [1,2,3,4,5,6 ] into a single array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.flat();
console.log("Flattened array:", flattenedArray);

// 34.Merge two arrays  and remove duplicates using Set
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const mergedUniqueArray = [...new Set([...array1, ...array2])];
console.log("Merged array with unique values:", mergedUniqueArray);

//35.Write a program to remove  null/undefined / empty  values from an array
const arrayWithNulls = [1, null, 2, undefined, 3, "", 4, 5];
const cleanedArray = arrayWithNulls.filter(
  (item) => item != null && item !== ""
);
console.log("Array after removing null/undefined/empty values:", cleanedArray);

//36.Create an array of  objects for students {name, mark} and print all names
const students = [
  { name: "Alice", mark: 85 },
  { name: "Bob", mark: 70 },
  { name: "Charlie", mark: ninety },
];
students.forEach((student) => {
  console.log("Student name:", student.name);
});

// 37. use filter() to get students who scored more than 60 marks
const passedStudents = students.filter((student) => student.mark > 60);
console.log("Students who scored more than 60 marks:", passedStudents);

// 38.Sort an array of objects based on marks in descending order
const sortedStudents = students.sort((a, b) => b.mark - a.mark);
console.log("Students sorted by marks (descending):", sortedStudents);

// 39.Find the student with the highest marks using reduce()
const topStudent = students.reduce((highest, current) => {
  return current.mark > highest.mark ? current : highest;
}, students[0]);
console.log("Student with highest marks:", topStudent);

// 40.Convert an array of strings ["a","b","c"]  to "abc" using join()
const stringArray = ["a", "b", "c"];
const joinedString = stringArray.join("");
console.log("Joined string:", joinedString);

//
//
//Level -5  Challenge tasks (Project level practice)
//
//

// 41.Create a function  that takes an array of numbers  and returns a new array  with only unique values
function getUniqueValues(arr) {
  return [...new Set(arr)];
}
const numsWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = getUniqueValues(numsWithDuplicates);
console.log("Unique values:", uniqueNums);

// 42.Create a function to count the frequency of each element in an array
function countFrequency(arr) {
  const frequency = {};
  arr.forEach((item) => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  return frequency;
}
const sampleArray = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequencyCount = countFrequency(sampleArray);
console.log("Frequency count:", frequencyCount);

// 43.Write a function that removes  duplicates without using Set
function removeDuplicates(arr) {
  const uniqueArr = [];
  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
}
const arrayWithDups = [1, 2, 2, 3, 4, 4, 5];
const noDupsArray = removeDuplicates(arrayWithDups);
console.log("Array without duplicates:", noDupsArray);

// 44. Create a function to  find the second largest number in an array
function findSecondLargest(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}
const numberArray = [10, 20, 30, 40, 50, 50, 40];
const secondLargest = findSecondLargest(numberArray);
console.log("Second largest number is:", secondLargest);

// 45. Split into an array with two halves  and print both
function splitArrayInHalves(arr) {
  const mid = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf];
}

// 46. Create a function to rotate an array  to the right by 1 position
function rotateArrayRight(arr) {
  if (arr.length === 0) return arr;
  const lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
}
const arrayToRotate = [1, 2, 3, 4, 5];
const rotatedArray = rotateArrayRight(arrayToRotate);
console.log("Rotated array:", rotatedArray);

// 47. Write a function that  merges two  sorted arrays into a single sorted array
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // 48. Create a function to check if  two arrays are equal
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const mergedSortedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log("Merged sorted array:", mergedSortedArray);

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3];
const arrayC = [1, 2, 4];
console.log("Array A and B are equal?", areArraysEqual(arrayA, arrayB));
console.log("Array A and C are equal?", areArraysEqual(arrayA, arrayC));

// 49. Group even and odd numbers  from an array into  two separate arrays
function groupEvenOdd(arr) {
  const evenNumbers = [];
  const oddNumbers = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  });
  return { evenNumbers, oddNumbers };
}
const mixedNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const groupedNumbers = groupEvenOdd(mixedNumArray);
console.log("Even numbers:", groupedNumbers.evenNumbers);
console.log("Odd numbers:", groupedNumbers.oddNumbers);

// 50. Create a shopping cart array (Objects with name & price ) and  find the total bill using reduce()

const shoppingCart = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.75 },
  { name: "Cherry", price: 2.0 },
];
const totalBill = shoppingCart.reduce((total, item) => total + item.price, 0);
console.log("Total bill amount:", totalBill);
