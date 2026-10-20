// ===== Task 2. Changing Content =====
let text = document.getElementById("text");
let changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text was changed with JavaScript!";
});


// ===== Task 3. Changing Styles =====
let styleBox = document.getElementById("styleBox");
let colorBtn = document.getElementById("colorBtn");
let fontBtn = document.getElementById("fontBtn");

let colors = ["lightblue", "lightgreen", "khaki", "pink"];
let colorIndex = 0;
let fontSize = 16;

colorBtn.addEventListener("click", function () {
  styleBox.style.backgroundColor = colors[colorIndex];
  colorIndex = colorIndex + 1;
  if (colorIndex === colors.length) {
    colorIndex = 0; // start again from the first color
  }
});

fontBtn.addEventListener("click", function () {
  fontSize = fontSize + 2;
  styleBox.style.fontSize = fontSize + "px";
});


// ===== Task 4. Creating & Removing Elements =====
let itemList = document.getElementById("itemList");
let addItemBtn = document.getElementById("addItemBtn");
let removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "Item " + (itemList.children.length + 1);
  itemList.appendChild(li);
});

removeItemBtn.addEventListener("click", function () {
  let lastItem = itemList.lastElementChild;
  if (lastItem !== null) {
    lastItem.remove();
  }
});
