1- Live typing display

<input type="text" 
 id="userInput"
 placeholder="Type something..." 
 onkeyup="showText()">

<p>You typed: <span id="output"></span></p>

<script>
function showText() {
    let text = document.getElementById("userInput").value;
    document.getElementById("output").innerText = text;
}
</script>
