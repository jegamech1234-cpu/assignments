1. Flatten a nested array `[[1,2],[3,4],[5,6]]` into a single array

Using a loop

```js
let nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flat = [];

for (let i = 0; i < nested.length; i++) {
  for (let j = 0; j < nested[i].length; j++) {
    flat.push(nested[i][j]);
  }
}

console.log(flat);
```

```
[1, 2, 3, 4, 5, 6]
```

---

2. Merge two arrays and remove duplicates using Set

```js
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let merged = [...new Set([...arr1, ...arr2])];

console.log(merged);

[1, 2, 3, 4, 5, 6];
```
