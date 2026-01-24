// Project 4: Dictionaries (JavaScript Objects)
// A "dictionary" in JavaScript is commonly represented using an object with key-value pairs.

var car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "White",
  fuelType: "Gasoline"
};

// This function outputs a chosen dictionary value into the HTML element with id="Dictionary"
function showDictionaryValue() {
  document.getElementById("Dictionary").innerHTML =
    "Car model: " + car.model;
}
