// Project 6: Ternary Operators & Constructors

// Ternary Operator Example
function rideFunction() {
  var height = document.getElementById("Height").value;
  var canRide = (height >= 52) ? "You are tall enough" : "You are too short";
  document.getElementById("Ride").innerHTML = canRide + " to ride.";
}

// Constructor Example
function Vehicle(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

// Create an object using the constructor
var myCar = new Vehicle("Toyota", "Corolla", 2020, "White");

function showConstructor() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    myCar.year + " " + myCar.make + " " + myCar.model + " (" + myCar.color + ")";
}

// New Keyword Assignment

// Constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Create an object using the NEW keyword
var myPerson = new Person("Moe", "Ayasso", 30);

// Display the object info when button is clicked
function showNewKeyword() {
  document.getElementById("New_and_This").innerHTML =
    myPerson.firstName + " " + myPerson.lastName + " is " + myPerson.age + " years old.";
}

// Nested Functions Assignment

function nestedFunction() {
  // Outer function variable
  var startingNumber = 10;

  // Inner (nested) function
  function addTwo() {
    startingNumber += 2;
    return startingNumber;
  }

  // Display the nested function result in the HTML element
  document.getElementById("Nested_Function").innerHTML =
    "Result: " + addTwo();
}

