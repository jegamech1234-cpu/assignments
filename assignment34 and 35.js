// Level 1: Basic Array Operations

// 1
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(fruits);

// 2
console.log(fruits[0], fruits[fruits.length - 1]);

// 3
console.log(fruits.length);

// 4
fruits.push("Pineapple");
console.log(fruits);

// 5
fruits.pop();
console.log(fruits);

// 6
fruits.unshift("Strawberry");
console.log(fruits);

// 7
fruits.shift();
console.log(fruits);

// 8
fruits[1] = "Kiwi";
console.log(fruits);

// 9
let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b];
console.log(combined);

// 10
console.log(fruits.includes("Apple"));


// Level 2: Loops and Conditions

// 11
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 12
for (let item of fruits) {
    console.log(item);
}

// 13
fruits.forEach((item, index) => {
    console.log(index, item);
});

// 14
let nums = [10, 20, 30];
let sum = 0;
for (let i = 0; i < nums.length; i++) sum += nums[i];
console.log(sum);

// 15
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
}
console.log(max);

// 16
let evenCount = 0;
for (let n of nums) {
    if (n % 2 === 0) evenCount++;
}
console.log(evenCount);

// 17
let marks = [30, 45, 60];
marks.forEach(m => console.log(m >= 35 ? "Pass" : "Fail"));

// 18
let names = ["Arun", "Bala", "Ajay"];
names.forEach(n => {
    if (n.startsWith("A")) console.log(n);
});

// 19
console.log(nums.reverse());

// 20
let arrSort = [40, 10, 30, 20];
arrSort.sort((a, b) => a - b);
console.log(arrSort);


// Level 3: Array Methods

// 21
console.log([1, 2, 3].map(n => n * 2));

// 22
console.log([1, 2, 3, 4].filter(n => n % 2 === 0));

// 23
console.log([10, 20, 30].reduce((a, b) => a + b, 0));

// 24
console.log([10, 40, 60, 20].find(n => n > 50));

// 25
console.log([10, 200, 30].some(n => n > 100));

// 26
console.log([1, 2, 3].every(n => n > 0));

// 27
console.log(["ram", "sam"].map(n => n.toUpperCase()));

// 28
console.log([40, 55, 70, 30, 90].filter(m => m >= 50));

// 29
console.log([1, 2, 3].map(n => n * 10));

// 30
let avg = [10, 20, 30].reduce((a, b) => a + b, 0) / 3;
console.log(avg);


// Level 4: Nested & Advanced

// 31
let marks2D = [[80, 70], [60, 90]];
marks2D.forEach(row => console.log(row));

// 32
console.log(marks2D[1][1]);

// 33
console.log([[1,2],[3,4],[5,6]].flat());

// 34
console.log([...new Set([1,2,3,2,4])]);

// 35
console.log([0, null, "", 10, undefined].filter(v => v));

// 36
let students = [{name:"A", mark:50}, {name:"B", mark:70}];
students.forEach(s => console.log(s.name));

// 37
console.log(students.filter(s => s.mark > 60));

// 38
students.sort((a, b) => b.mark - a.mark);
console.log(students);

// 39
let topStudent = students.reduce((a, b) => a.mark > b.mark ? a : b);
console.log(topStudent);

// 40
console.log(["a","b","c"].join(""));


// Level 5: Challenge Tasks

// 41
function uniqueArray(arr) {
    return [...new Set(arr)];
}
console.log(uniqueArray([1,2,2,3]));

// 42
function frequency(arr) {
    let obj = {};
    arr.forEach(v => obj[v] = (obj[v] || 0) + 1);
    return obj;
}
console.log(frequency([1,2,2,3]));

// 43
function removeDuplicates(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) res.push(arr[i]);
    }
    return res;
}
console.log(removeDuplicates([1,2,2,3]));

// 44
function secondLargest(arr) {
    let sorted = [...new Set(arr)].sort((a,b)=>b-a);
    return sorted[1];
}
console.log(secondLargest([10, 20, 30, 40]));

// 45
let half = Math.floor(arrSort.length / 2);
console.log(arrSort.slice(0, half), arrSort.slice(half));

// 46
function rotateRight(arr) {
    arr.unshift(arr.pop());
    return arr;
}
console.log(rotateRight([1,2,3]));

// 47
function mergeSorted(a, b) {
    return [...a, ...b].sort((x,y)=>x-y);
}
console.log(mergeSorted([1,3,5],[2,4,6]));

// 48
function arraysEqual(a, b) {
    return a.length === b.length && a.every((v,i)=>v===b[i]);
}
console.log(arraysEqual([1,2],[1,2]));

// 49
function groupEvenOdd(arr) {
    let even = [], odd = [];
    arr.forEach(n => n % 2 === 0 ? even.push(n) : odd.push(n));
    return { even, odd };
}
console.log(groupEvenOdd([1,2,3,4]));

// 50
let cart = [
    {name:"Pen", price:10},
    {name:"Book", price:50}
];
let totalBill = cart.reduce((sum, item) => sum + item.price, 0);
console.log(totalBill);
