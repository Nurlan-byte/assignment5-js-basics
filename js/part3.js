// ===== Task 5. Mouse Events =====
let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "orange";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "lightgray"; // original color
});


// ===== Task 6. Keyboard Events =====
let typeInput = document.getElementById("typeInput");
let typeOutput = document.getElementById("typeOutput");

typeInput.addEventListener("keyup", function () {
  typeOutput.textContent = typeInput.value;
});


// ===== Task 7. Calculator =====
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operator) {
  // Empty fields are not allowed
  if (num1.value === "" || num2.value === "") {
    result.textContent = "Please enter both numbers";
    return;
  }

  // Input values are strings, so convert them to numbers
  let a = Number(num1.value);
  let b = Number(num2.value);

  if (operator === "+") {
    result.textContent = a + b;
  } else if (operator === "-") {
    result.textContent = a - b;
  } else if (operator === "*") {
    result.textContent = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result.textContent = "Cannot divide by zero";
    } else {
      result.textContent = a / b;
    }
  }
}

document.getElementById("addBtn").addEventListener("click", function () {
  calculate("+");
});
document.getElementById("subBtn").addEventListener("click", function () {
  calculate("-");
});
document.getElementById("mulBtn").addEventListener("click", function () {
  calculate("*");
});
document.getElementById("divBtn").addEventListener("click", function () {
  calculate("/");
});
