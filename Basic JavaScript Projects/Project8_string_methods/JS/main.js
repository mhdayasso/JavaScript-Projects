// Project 8: String Methods Assignment
// Requirements:
// - Functions using concat(), slice(), toString(), toPrecision()
// - HTML elements to call/display results
// - Comments throughout

// concat() connects two or more strings together
function showConcat() {
  var part1 = "Hello";
  var part2 = " ";
  var part3 = "World!";
  var fullMessage = part1.concat(part2, part3);

  document.getElementById("ConcatOutput").innerHTML =
    "concat() result: " + fullMessage;
}

// slice() returns a section of a string
function showSlice() {
  var text = "JavaScript string methods are useful!";
  var sliced = text.slice(0, 10); // "JavaScript"

  document.getElementById("SliceOutput").innerHTML =
    "slice() result: " + sliced;
}

// toString() converts a number to a string
function showToString() {
  var myNumber = 123;
  var asString = myNumber.toString();

  document.getElementById("ToStringOutput").innerHTML =
    "toString() result: " + asString + " (type: " + typeof asString + ")";
}

// toPrecision() formats a number to a specified length (significant digits)
// It returns a STRING
function showToPrecision() {
  var myNumber = 123.456789;
  var precisionResult = myNumber.toPrecision(5); // "123.46"

  document.getElementById("ToPrecisionOutput").innerHTML =
    "toPrecision(5) result: " + precisionResult + " (type: " + typeof precisionResult + ")";
}
