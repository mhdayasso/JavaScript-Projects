// Addition operation: adds two numbers and displays the result
function additionFunction() {
  var result = 10 + 5;
  document.getElementById("MathAdd").textContent = "10 + 5 = " + result;
}

// Subtraction operation: subtracts two numbers and displays the result
function subtractionFunction() {
  var result = 10 - 5;
  document.getElementById("MathSub").textContent = "10 - 5 = " + result;
}

// Multiplication operation: multiplies two numbers and displays the result
function multiplicationFunction() {
  var result = 10 * 5;
  document.getElementById("MathMul").textContent = "10 * 5 = " + result;
}

// Division operation: divides two numbers and displays the result
function divisionFunction() {
  var result = 10 / 5;
  document.getElementById("MathDiv").textContent = "10 / 5 = " + result;
}

// Multiple mathematical operations displayed at once
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
