// Project 5: Type Coercion
// Type coercion happens when JavaScript automatically converts one type to another.

// Example 1: Number + String => String (concatenation)
var result1 = 10 + "5"; // 10 becomes a string, result is "105"
document.write("10 + '5' = " + result1 + "<br>");
document.write("Type of result: " + typeof result1 + "<br><br>");

// Example 2: String * Number => Number (numeric coercion)
var result2 = "10" * 2; // "10" becomes a number, result is 20
document.write("'10' * 2 = " + result2 + "<br>");
document.write("Type of result: " + typeof result2);

// Infinity Assignment
// Dividing by 0 produces Infinity or -Infinity in JavaScript.

document.getElementById("Infinity").textContent = "Infinity: " + (1e309);
document.getElementById("NegInfinity").textContent = "-Infinity: " + (-1e309);

// Boolean Logic Assignment
// Comparisons using > or < return true or false.

document.getElementById("TrueResult").textContent = "10 > 5 is " + (10 > 5);
document.getElementById("FalseResult").textContent = "10 < 5 is " + (10 < 5);

// console.log() Assignment
// Perform a math operation and log the result to the console.

console.log("Math operation (10 + 15) =", 10 + 15);

// Double Equal Signs (==) Assignment
// == uses type coercion (loose equality)

document.getElementById("DoubleEqualTrue").textContent =
  '"10" == 10 is ' + ("10" == 10);   // true (string coerces to number)

document.getElementById("DoubleEqualFalse").textContent =
  '"10" == 11 is ' + ("10" == 11);   // false

// Triple Equal Signs (===) Assignment
// === checks both value AND data type (strict equality).

// TRUE: same data type and same value
document.getElementById("TripleTrue").textContent =
  "10 === 10 is " + (10 === 10); // true

// FALSE: different data type AND different value
document.getElementById("TripleFalse1").textContent =
  '"10" === 11 is ' + ("10" === 11); // false

// FALSE: different data type but SAME value
document.getElementById("TripleFalse2").textContent =
  '"10" === 10 is ' + ("10" === 10); // false

// FALSE: same data type but DIFFERENT value
document.getElementById("TripleFalse3").textContent =
  "10 === 11 is " + (10 === 11); // false

  // AND (&&) Operator Assignment
// && returns true only if BOTH conditions are true.

document.getElementById("AndTrue").textContent =
  "(10 > 5 && 8 > 3) is " + (10 > 5 && 8 > 3); // true

document.getElementById("AndFalse").textContent =
  "(10 > 5 && 8 < 3) is " + (10 > 5 && 8 < 3); // false

  // NOT (!) Operator Assignment
// ! flips a boolean value.

document.getElementById("NotTrue").textContent =
  "!(10 < 5) is " + !(10 < 5); // true because (10 < 5) is false

document.getElementById("NotFalse").textContent =
  "!(10 > 5) is " + !(10 > 5); // false because (10 > 5) is true
