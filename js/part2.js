// ===== Task 2. Changing Content =====
let text = document.getElementById("text");
let changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text was changed with JavaScript!";
});
