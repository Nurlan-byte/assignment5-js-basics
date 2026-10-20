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
