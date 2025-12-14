// 1. Create an object named person
let person = {
  name: "jegadeesh",
  age: 25,
  city: "Chennai",
};

// 2. Print all properties
console.log(person);

// 3. Access and print only the name property
console.log(person.name);

// 4. Change the value of the age property
person.age = 30;
console.log("Updated age:", person.age);

// 5. Add a new property gender
person.gender = "Male";
console.log("After adding gender:", person);

// 6. Delete the city property
delete person.city;
console.log("After deleting city:", person);

// 7. Check if email property exists
console.log("Does email exist?", person.hasOwnProperty("email"));

// 8. Print all keys
console.log("Keys:", Object.keys(person));

// 9. Print all values
console.log("Values:", Object.values(person));

// 10. Print all key-value pairs
console.log("Entries:", Object.entries(person));
