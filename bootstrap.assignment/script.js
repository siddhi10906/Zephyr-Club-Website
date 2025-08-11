

let user = "";

$("#askNameBtn").click(function () {
  user = prompt("What is your name?");
  if (user && user.trim() !== "") {
    $("#greeting").text("Hello " + user + "! Welcome to Zephyr Club").hide().fadeIn(600);
  } else {
    $("#greeting").text("Welcome to Zephyr Club!").hide().fadeIn(800);
  }
});

$("#showStylesBtn").click(function () {
  const styles = ["Hip-Hop", "Contemporary", "Classical", "Locking", "Popping"];
  let message = "We love these dance styles:<br>";
  for (let i = 0; i < styles.length; i++) {
    message += `<span style="color: black;">${i + 1}. ${styles[i]}</span><br>`;
  }
  $("#output").fadeOut(200, function () {
    $(this).html(message).fadeIn(400);
  });
  $("#extraOutput").html("");
});


$("#suggestPracticeBtn").click(function () {
  let level = prompt("Are you Beginner, Intermediate, or Advanced?");
  if (level) level = level.toLowerCase();

  if (!level) {
    $("#output").html("Please enter your level next time!").css("color", "red");
    return;
  }

  let hours;
  if (level === "beginner") hours = 1;
  else if (level === "intermediate") hours = 2;
  else if (level === "advanced") hours = 3;
  else {
    $("#output").html("Invalid level entered!").css("color", "red");
    return;
  }

  let nameText = user ? user + "," : "Dancer,";
  $("#output")
    .html(nameText + " you should practice <b>" + hours + " hour(s)</b> daily!")
    .css("color", "blue")
    .hide()
    .fadeIn(600);
  $("#extraOutput").html("");
});

$("#changeColorBtn").click(function () {
  $("#output").css("color", "green");
  $("#extraOutput").html("Dance styles color changed to green!").hide().fadeIn(400);
});



$("#clearOutputBtn").click(function () {
  $("#output, #extraOutput").fadeOut(300, function () {
    $(this).html("").show();
  });
});

$("#output").dblclick(function () {
  const textToCopy = $(this).text();
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Output copied to clipboard!");
    })
    .catch(() => {
      alert("Copy failed. Try manually.");
    });
});
