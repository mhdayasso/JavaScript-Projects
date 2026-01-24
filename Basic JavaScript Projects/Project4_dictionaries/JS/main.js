// Project 4: Dictionaries Assignment
// A "dictionary" in JavaScript can be represented using an object with key-value pairs.

var car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "White"
};

// This function runs when the user clicks the paragraph in index.html
function showDictionaryValue() {
  // Choose a key we plan to display
  var keyToDelete = "model";

  // Delete the key from the dictionary BEFORE displaying it
  delete car[keyToDelete];

  // Output the key-value pair into the HTML element
  // Since the key was deleted, the value will be undefined
  document.getElementById("Dictionary").innerHTML =
    keyToDelete + ": " + car[keyToDelete];
}
