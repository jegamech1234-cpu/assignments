// 1-Create an array of numbers
let numbers = [10, 25, 30, 45, 60];
console.log("Original Array:", numbers);

// 2️- Print all elements using a for loop
console.log("\nUsing for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 3️- Print all elements using for...of loop
console.log("\nUsing for...of loop:");
for (let num of numbers) {
  console.log(num);
}

// 4️- Find the sum of numbers in an array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("\nSum of numbers:", sum);

// 5️- Find the maximum number in an array
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Maximum number:", max);

// 6️- Count how many numbers are even
let evenCount = 0;
for (let num of numbers) {
  if (num % 2 === 0) {
    evenCount++;
  }
}
console.log("Count of even numbers:", evenCount);

// 7️- Use map() to create a new array with each element doubled
let doubled = numbers.map((num) => num * 2);
console.log("Doubled Array (using map):", doubled);

// 8️- Use filter() to create an array of only even numbers
let evens = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers (using filter):", evens);

// 9- Use reduce() to find the total sum of numbers
let totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum (using reduce):", totalSum);
