Task 1: Change text
Task 2: Change color
Task 3: Image swap
Task 4: Show/ Hide paragraph
Task 5: Add list item
Task 6: Change style on hover
Task 7: Input display
Task 8: Count clicks
Task 9: Dynamic paragraph
Task 10: Style toggle

    <!-- Answers for all 10 tasks  -->

    ```js

1- document.getElementById("txt").innerText = "New Text!"

2- document.getElementById("box").style.color = "red";

3- Image swap

document.getElementById("img").src="new-image.jpg";

4- Show/Hide paragraph

let p = document.getElementById("par");
p.style.display = p.style.display === "none" ? "block" : "none";

5- add list item

let li = document.createElement("li");
li.textContent = "New item";
document.getElementById("myList").appendChild(li);

6- Change style on hover

let box = document.getElementById("hoverbox");

box.onmouseover = () => box.style.background = "yellow";
box.onmouseout = () => box.style.background = "lightblue";

7- Input display
let value = document.getElementById("userInput").value;
document.getElementById("output").innerText = value;

8-Count clicks
let count = 0;
document.getElementById("btn").onclick = () => {
count++;
document.getElementById("clicks").innerText = count;
};

9-Dynamic paragraph

let newP = document.createElement("p");
newP.textContent = "This is a new dynamic paragraph.";
document.body.appendChild(newP);

10-Style toggle

let element = document.getElementById("toggleBox");

element.classList.toggle("active");
