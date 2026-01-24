// Project 2: Functions Assignment
// Requirement: Write a function that uses the += operator
// Requirement: Display the function output in an HTML element

// This function will build a message using += and display it on the page
function addMessage() {
  // Start with an initial string
  var message = "Hello";

  // Use += operator to add more text to the same variable
  message += ", this message was created using the += operator!";

  // Add even more content using += again (still meets requirement)
  message += " ✅";

  // Display the final message inside the HTML element with id="output"
  document.getElementById("output").textContent = message;
}
