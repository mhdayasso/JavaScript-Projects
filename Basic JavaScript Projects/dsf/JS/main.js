// Project 7: Scope + Debugging

// GLOBAL variable (accessible anywhere in this file)
var globalGreeting = "Hello from the global variable!";

function debugFunction() {
  // LOCAL variable (only exists inside this function)
  var localMessage = "Hello from the local variable!";

  // Use console.log() to help debug and understand what is happening
  console.log("✅ debugFunction() started");
  console.log("Global variable:", globalGreeting);
  console.log("Local variable:", localMessage);

  // INTENTIONAL ERROR:
  // The variable name below is misspelled on purpose to create an error.
  // Change 'localMesage' to 'localMessage' to fix it.
console.log("Fixed:", localMessage);

  // This line will not run until the error above is fixed
  document.getElementById("DebugMessage").innerHTML = "Check the console logs!";
}

// Project 7: new Date().getHours() + if statement

function showTimeMessage() {
  var hour = new Date().getHours(); // gets current hour (0–23)
  var message;

  // if statement based on the time
  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  // display result in the HTML element with id="TimeMessage"
  document.getElementById("TimeMessage").innerHTML =
    message + " (Current hour: " + hour + ")";
}

// Else Assignment: if / else with getElementById()

function checkNumber() {
  var value = document.getElementById("userNumber").value;
  var number = Number(value);

  if (number >= 10) {
    document.getElementById("resultMessage").innerHTML =
      "Nice — that's 10 or more!";
  } else {
    document.getElementById("resultMessage").innerHTML =
      "That’s less than 10. Try a bigger number!";
  }
}

function Time_function() {
  var Time = new Date().getHours();
  var Reply;

  if (Time > 0 && Time < 12) {
    Reply = "It is morning time!";
  } else if (Time >= 12 && Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time.";
  }

  document.getElementById("Time_of_day").innerHTML = Reply;
}
