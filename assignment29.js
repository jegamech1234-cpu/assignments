// 1- Create an object employee  with name,age, salary
// write a program to increase the  salary by 10 % and update the object

let employee = { name: "John", age: 30, salary: 50000 };
let increasePercentage = 10;
let increasedAmount = (employee.salary * increasePercentage) / 100;
employee.salary += increasedAmount;
console.log(employee);

// 2-Given an object:
// let product = {name:"Laptop", price:50000, discount:10};
// calculate the final price after applying the discount  and add a new key finalPrice to the object

let product = { name: "Laptop", price: 50000, discount: 10 };
let discountAmount = (product.price * product.discount) / 100;
let finalPrice = product.price - discountAmount;
product.finalPrice = finalPrice;
console.log(product);

// 3- Create an object with  5 subject marks:
// using a loop to find the  total and average

let marks = { math: 85, english: 78, science: 92, history: 74, art: 88 };
let total = 0;
let subjectCount = 0;
for (let subject in marks) {
  total += marks[subject];
  subjectCount++;
}
let average = total / subjectCount;
console.log("Total Marks:", total);
console.log("Average Marks:", average);

// 4- Given an object

let user = { name: "arun", city: "chennai", age: 24 };
if ("city" in user) {
  console.log("City:", user.city);
} else {
  console.log("Not found");
}

// 5- Create an object car with 4 Properties
// then delete one property  using delete and print the object

let car = { brand: "Toyota", model: "Camry", year: 2020, color: "Red" };
delete car.color;
console.log(car);

// 6- Create an object with product quantities:
// let cart = {apple:3, Oragne:5, bananan:2};
// using a loop to continue the  total number of  fruits

let cart = { apple: 3, Orange: 5, banana: 2 };
let totalFruits = 0;
for (let fruit in cart) {
  totalFruits += cart[fruit];
}

console.log("Total number of fruits:", totalFruits);
// Output: Total number of fruits: 10

// 7- Using object.entries()  on an object and  print each key  and  value separately using a loop

let student = { name: "Sara", age: 21, major: "Computer Science" };
let entries = Object.entries(student);
for (let i = 0; i < entries.length; i++) {
  let key = entries[i][0];
  let value = entries[i][1];
  console.log(key + ":", value);
}

// 8- you have an array of objects:
// [
//     {name:"Ravi",age:17,},
//     {name:"Kumar", age:25},
//     {name:"Siva",age:19}
// ]

// Print only the name of the people above 18

let people = [
  { name: "Ravi", age: 17 },
  { name: "Kumar", age: 25 },
  { name: "Siva", age: 19 },
];
for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18) {
    console.log(people[i].name);
  }
}

// 9-Create an object  bankAccount with balance:1000
// Add methods deposit (amount) and withdraw (amount) that update the balance

let bankAccount = {
  balance: 1000,
  deposit: function (amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  },
  withdraw: function (amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.balance}`);
    }
  },
};
bankAccount.deposit(500); // Deposited: 500, New Balance: 1500
bankAccount.withdraw(200); // Withdrew: 200, New Balance: 1300
bankAccount.withdraw(2000); // Insufficient balance

// 10- Given an Object
// let movie = {title:"Avatar", rating:8.5, year:2009};
// write a program to check
// if a rating is above 8 --> print "super hit"
// between 5 and 8 --> print "hit"
// below 5 --> print "flop"
let movie = { title: "Avatar", rating: 8.5, year: 2009 };
if (movie.rating > 8) {
  console.log("super hit");
} else if (movie.rating >= 5 && movie.rating <= 8) {
  console.log("hit");
} else {
  console.log("flop");
}
