// Project 7: Scope / Time / Function
// Requirements covered:
// 1) Global variable + local variable
// 2) Function with an if statement
// 3) Intentional error + console.log debugging
// 4) Time_function() using new Date().getHours()
// 5) Comments throughout

// GLOBAL variable (available anywhere in this JS file)
var globalMessage = "I am a global variable.";

// Time_function: uses the current hour to display morning/afternoon/evening
function Time_function() {
  var Time = new Date().getHours(); // local variable (only inside this function)
  var Reply;

  // if statement (with else-if and else)
  if (Time > 0 && Time < 12) {
    Reply = "It is morning time!";
  } else if (Time >= 12 && Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time.";
  }

  // Output the result into the HTML element
  document.getElementById("Time_of_day").innerHTML = Reply;
}

// Debug function: includes a local variable, an intentional error, and console.log debugging
function debugFunction() {
  // LOCAL variable (only exists inside this function)
  var localMessage = "I am a local variable.";

  // Use console.log() to debug (view in Chrome/Edge DevTools Console)
  console.log("✅ debugFunction started");
  console.log("Global variable:", globalMessage);
  console.log("Local variable:", localMessage);

  // INTENTIONAL ERROR (misspelled variable name)
  // This will throw: ReferenceError: localMesage is not defined
  console.log("This line will cause an error:", localMesage);

  // This line will not run until the error above is fixed
  document.getElementById("DebugOutput").innerHTML = "Check the console logs!";
}
