// Project 3: Math Operators
// Each function runs when you click its matching paragraph in index.html.

// + Addition
function additionFunction() {
  var result = 10 + 5;
  document.getElementById("MathAdd").textContent = "10 + 5 = " + result;
}

// - Subtraction
function subtractionFunction() {
  var result = 10 - 5;
  document.getElementById("MathSub").textContent = "10 - 5 = " + result;
}

// * Multiplication
function multiplicationFunction() {
  var result = 10 * 5;
  document.getElementById("MathMul").textContent = "10 * 5 = " + result;
}

// % Modulus (remainder)
function modulusFunction() {
  var result = 10 % 3; // remainder is 1
  document.getElementById("MathMod").textContent = "10 % 3 = " + result;
}

// ++ Increment
function incrementFunction() {
  var number = 5;
  number++; // increment operator
  document.getElementById("MathInc").textContent = "After increment: " + number;
}

// -- Decrement
function decrementFunction() {
  var number = 5;
  number--; // decrement operator
  document.getElementById("MathDec").textContent = "After decrement: " + number;
}

// Math.random() (0 to 1)
function randomFunction() {
  var randomNum = Math.random();
  document.getElementById("MathRandom").textContent =
    "Random number (0 to 1): " + randomNum;
}
