```js
1-Loop + condition
for (let i = 1; i <= 50; i++) {
if (i > 20 && i % 2 === 0) {
console.log(i);
}
}

2-Loop + Accumulator
let marks = [35, 78, 92, 40, 55, 23, 89, 41, 39, 60];

let passed = 0;
let failed = 0;

for (let i = 0; i < marks.length; i++) {
if (marks[i] > 40) {
passed++; // increase passed count
} else {
failed++; // increase failed count
}
}

console.log("Passed Students:", passed);
console.log("Failed Students:", failed);

3- Nested Loop

for (let i = 1; i <= 4; i++) {
 let line = "";

    for (let j = 1; j <= i; j++) {
        line += j;
    }

    console.log(line);

}

4-Loop through array of objects

let products = [
{ name: "Pen", price: 20 },
{ name: "Book", price: 80 },
{ name: "Bag", price: 500 }
];

// Loop through array of objects
for (let i = 0; i < products.length; i++) {
if (products[i].price < 100) {
console.log(products[i].name); // print only the name
}
}

5-Transform using Loop (No Map)

let numbers = [2, 5, 8, 10];

let newArray = [];

for (let i = 0; i < numbers.length; i++)
 {
  newArray.push(numbers[i] * 3);
}

console.log(newArray);
```

