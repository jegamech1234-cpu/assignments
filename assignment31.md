1. Sort an array of objects by marks in descending orders

```js
let students = [
  { name: "jegadeesh", marks: 50 },
  { name: "Altimetrik", marks: 80 },
  { name: "Kumaran systems  ", marks: 65 },
];

students.sort(function (a, b) {
  return b.marks - a.marks; // descending order
});

console.log(students);
```

---

2. Find the student with the highest mark using reduce()

```js
let topStudent = students.reduce(function (prev, current) {
  return current.marks > prev.marks ? current : prev;
});

console.log("Top Student:", topStudent);
```

---

3. Convert ["a", "b", "c"] to "abc" using join()

```js
let letters = ["a", "b", "c"];
let output = letters.join("");

console.log(output);
```
