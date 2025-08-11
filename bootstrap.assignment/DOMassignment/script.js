
let greeting = document.getElementById("greeting");
let outputDiv = document.getElementById("output");
let extraOutput = document.getElementById("extraOutput");

let user = "";
function askName() {
  user = prompt("What is your name?");
  if (user && user.trim() !== "") {
    greeting.innerText = "Hello " + user + "! Welcome to Zephyr Club ";
  } else {
    greeting.innerText = "Welcome to Zephyr Club!";
  }
}
function showStyles() {
  let styles = ["Hip-Hop", "Contemporary", "Classical", "Locking", "Popping"];
  let message = "We love these dance styles:<br>";
  for (let i = 0; i < styles.length; i++) {
    message += (i + 1) + ". " + styles[i] + "<br>";
  }
  outputDiv.innerHTML = message;
}

function suggestPractice() {
  let level = prompt("Are you Beginner, Intermediate, or Advanced?");
  let hours = 1; 

  if (!level) {
    outputDiv.innerHTML = "Please enter your level next time!";
    return;
  }

  if (level === "beginner") {
    hours = 1;
  } else if (level === "intermediate") {
    hours = 2;
  } else if (level === "advanced") {
    hours = 3;
  }

  let nameText = user ? user + "," : "Dancer,";
  outputDiv.innerHTML = nameText + " you should practice <b>" + hours + " hour(s)</b> daily!";
}

function changeStyleColor() {

  outputDiv.style.color = "green";
  extraOutput.innerHTML = "Dance styles color changed to green!";
}

function clearOutput() {
  outputDiv.innerHTML = "";
  extraOutput.innerHTML = "";
}
