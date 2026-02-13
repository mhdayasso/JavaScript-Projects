// This function starts the receipt and gets the size price.
function getReceipt() {
  // This initializes our string so it can get passed from function to function,
  // growing line by line into a full receipt.
  let text1 = "<h3>You Ordered:</h3>";
  let runningTotal = 0;
  let sizeTotal = 0;
  let selectedSize = "";

  // Get selected size
  const sizeArray = document.getElementsByClassName("size");
  for (let i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      selectedSize = sizeArray[i].value;
      text1 += selectedSize + "<br>";
    }
  }

  // Size pricing
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }

  runningTotal = sizeTotal;

  // Debugging logs (your course likes these)
  console.log(selectedSize + " = $" + sizeTotal.toFixed(2));
  console.log("text1:", text1);
  console.log("subtotal:", runningTotal.toFixed(2));

  // Move to meats
  getMeats(runningTotal, text1);
}

// This function calculates meat toppings ($1 each after the first free one)
function getMeats(runningTotal, text1) {
  let meatTotal = 0;
  let selectedMeats = [];

  const meatArray = document.getElementsByClassName("toppings");
  for (let i = 0; i < meatArray.length; i++) {
    if (meatArray[i].checked) {
      selectedMeats.push(meatArray[i].value);
      text1 += meatArray[i].value + "<br>";
    }
  }

  // first meat free, each additional meat = $1
  if (selectedMeats.length > 1) {
    meatTotal = selectedMeats.length - 1;
  }

  runningTotal += meatTotal;

  console.log("meats:", selectedMeats);
  console.log("meatTotal: $" + meatTotal.toFixed(2));
  console.log("subtotal:", runningTotal.toFixed(2));

  // Move to veggies
  getVeggies(runningTotal, text1);
}

// This function calculates veggie toppings ($1 each after the first free one)
function getVeggies(runningTotal, text1) {
  let veggieTotal = 0;
  let selectedVeggies = [];

  const veggieArray = document.getElementsByClassName("veggie");
  for (let i = 0; i < veggieArray.length; i++) {
    if (veggieArray[i].checked) {
      selectedVeggies.push(veggieArray[i].value);
      text1 += veggieArray[i].value + "<br>";
    }
  }

  // first veggie free, each additional veggie = $1
  if (selectedVeggies.length > 1) {
    veggieTotal = selectedVeggies.length - 1;
  }

  runningTotal += veggieTotal;

  console.log("veggies:", selectedVeggies);
  console.log("veggieTotal: $" + veggieTotal.toFixed(2));
  console.log("FINAL total:", runningTotal.toFixed(2));

  // Display receipt
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "Total: $" + runningTotal.toFixed(2);
}
