// 1-Create an array of 3 students
let students = ["jegadeesh", "Suresh", "Mahesh"];
console.log("Initial Students:", students);

// 2- Add one more student using push()
students.push("Rajesh");
console.log("After push():", students);

// 3-Remove the last element using pop()
students.pop();
console.log("After pop():", students);

// 4- Add one element at the start using unshift()
students.unshift("Kiran");
console.log("After unshift():", students);

// 5- Remove the first element using shift()
students.shift();
console.log("After shift():", students);

// 6- Print all elements using a for loop
console.log("Using for loop:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// 7- Print all elements using for...of loop
console.log("Using for...of loop:");
for (let name of students) {
  console.log(name);
}

// 8- Print all elements using for...in loop
console.log("Using for...in loop:");
for (let index in students) {
  console.log(students[index]);
}
