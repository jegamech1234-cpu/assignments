// Food Menu using switch statement
let choice = 3;

switch (choice) {
  case 1:
    console.log(" You selected Pizza");
    break;
  case 2:
    console.log(" You selected Burger");
    break;
  case 3:
    console.log(" You selected Hot Dog");
    break;
  case 4:
    console.log(" You selected Pasta");
    break;
  case 5:
    console.log(" You selected Salad");
    break;
  default:
    console.log(" Invalid choice! Please select between 1 and 5.");
}

console.log("Odd numbers from 1 to 15:");
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
