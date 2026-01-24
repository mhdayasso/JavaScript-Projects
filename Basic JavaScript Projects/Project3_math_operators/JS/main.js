// Project 3: Math Operators
// Each function runs when you click its matching paragraph in index.html.

// Addition operation
function additionFunction() {
  var result = 10 + 5;
  document.getElementById("MathAdd").textContent = "10 + 5 = " + result;
}

// Subtraction operation
function subtractionFunction() {
  var result = 10 - 5;
  document.getElementById("MathSub").textContent = "10 - 5 = " + result;
}

// Multiplication operation
function multiplicationFunction() {
  var result = 10 * 5;
  document.getElementById("MathMul").textContent = "10 * 5 = " + result;
}

// Division operation
function divisionFunction() {
  var result = 10 / 5;
  document.getElementById("MathDiv").textContent = "10 / 5 = " + result;
}

// Multiple mathematical operations at once
function multipleOperations() {
  var a = 20;
  var b = 4;

  var add = a + b;
  var sub = a - b;
  var mul = a * b;
  var div = a / b;

  document.getElementById("MathAll").innerHTML =
    a + " + " + b + " = " + add + "<br>" +
    a + " - " + b + " = " + sub + "<br>" +
    a + " * " + b + " = " + mul + "<br>" +
    a + " / " + b + " = " + div;
}

function modulusFunction() {
  var result = 10 % 3;
  document.getElementById("MathMod").textContent = "10 % 3 = " + result;
}
