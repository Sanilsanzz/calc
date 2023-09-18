let displayValue = "";

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = evaluateExpression(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function evaluateExpression(expression) {
  // Implement your own expression evaluation logic here
  // For simplicity, we'll split the expression and evaluate step by step
  const tokens = expression.split(/\b(\+|\-|\*|\/)\b/); // Split by operators
  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    if (isNaN(operand)) {
      throw new Error("Invalid input");
    }

    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        if (operand === 0) {
          throw new Error("Division by zero");
        }
        result /= operand;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }

  return result;
}