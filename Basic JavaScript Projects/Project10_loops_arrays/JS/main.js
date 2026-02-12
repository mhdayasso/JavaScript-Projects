// Project 10: Loops & Arrays
// Requirements:
// - Function with while loop
// - Function with for loop
// - Function using an array
// - Create an object using let
// - Use HTML elements + getElementById to display results

// Function that uses a WHILE loop
function runWhileLoop() {
  let i = 1;
  let output = "";

  // while loop runs until condition becomes false
  while (i <= 5) {
    output += "While loop count: " + i + " ";
    i++;
  }

  document.getElementById("WhileOutput").textContent = output;
}

// Function that uses a FOR loop
function runForLoop() {
  let output = "";

  // for loop runs from 1 to 5
  for (let i = 1; i <= 5; i++) {
    output += "For loop count: " + i + " ";
  }

  document.getElementById("ForOutput").textContent = output;
}

// Function that uses an ARRAY
function showArray() {
  // array of values
  let fruits = ["Apple", "Banana", "Orange", "Grapes"];

  // display the array as a string
  document.getElementById("ArrayOutput").textContent =
    "Array items: " + fruits.join(", ");
}

// Create an object using the LET keyword (global object)
let student = {
  firstName: "Moe",
  program: "JavaScript",
  year: 2026
};

// Function to display the LET object
function showLetObject() {
  document.getElementById("ObjectOutput").textContent =
    student.firstName + " is in " + student.program + " (" + student.year + ").";
}
