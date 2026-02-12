const display = document.getElementById("display");

let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

function updateDisplay(value) {
  display.textContent = value;
}

function inputNumber(num) {
  if (waitingForSecondValue) {
    updateDisplay(num);
    waitingForSecondValue = false;
    return;
  }

  updateDisplay(display.textContent === "0" ? num : display.textContent + num);
}

function inputDecimal() {
  if (waitingForSecondValue) {
    updateDisplay("0.");
    waitingForSecondValue = false;
    return;
  }

  if (!display.textContent.includes(".")) {
    updateDisplay(display.textContent + ".");
  }
}

function handleOperator(nextOperator) {
  const currentValue = parseFloat(display.textContent);

  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
  }

  if (firstValue === null) {
    firstValue = currentValue;
  } else if (operator) {
    const result = calculate(firstValue, currentValue, operator);
    updateDisplay(String(result));
    firstValue = result;
  }

  operator = nextOperator;
  waitingForSecondValue = true;
}

function calculate(a, b, op) {
  if (op === "add") return a + b;
  if (op === "subtract") return a - b;
  if (op === "multiply") return a * b;
  if (op === "divide") return b === 0 ? 0 : a / b;
  return b;
}

function clearAll() {
  updateDisplay("0");
  firstValue = null;
  operator = null;
  waitingForSecondValue = false;
}

/* Button clicks */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.number) {
    inputNumber(btn.dataset.number);
    return;
  }

  const action = btn.dataset.action;

  if (action === "decimal") inputDecimal();
  else if (action === "clear") clearAll();
  else if (action === "equals") {
    if (operator === null || firstValue === null) return;
    const secondValue = parseFloat(display.textContent);
    const result = calculate(firstValue, secondValue, operator);
    updateDisplay(String(result));
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
  } else {
    // add/subtract/multiply/divide
    handleOperator(action);
  }
});
