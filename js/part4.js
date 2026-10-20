// ===== Task 8. Interactive To-Do List =====

// All tasks are stored in this array (no database, no localStorage).
// Each task is an object: { title: "...", description: "..." }
let tasks = [];

let titleInput = document.getElementById("titleInput");
let descInput = document.getElementById("descInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let emptyText = document.getElementById("emptyText");
let errorText = document.getElementById("errorText");


// Draw the list on the page from the tasks array
function renderTasks() {
  taskList.innerHTML = ""; // clear the old list

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    // <li class="todo-item">
    let li = document.createElement("li");
    li.className = "todo-item";

    // Header: title + buttons
    let header = document.createElement("div");
    header.className = "todo-header";

    let title = document.createElement("h3");
    title.textContent = task.title;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕ Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1); // remove 1 element at index i
      renderTasks();
    });

    header.appendChild(title);
    header.appendChild(deleteBtn);

    // Description
    let description = document.createElement("p");
    description.textContent = task.description;

    li.appendChild(header);
    li.appendChild(description);
    taskList.appendChild(li);
  }

  // Show "No tasks yet" only when the array is empty
  if (tasks.length === 0) {
    emptyText.style.display = "block";
  } else {
    emptyText.style.display = "none";
  }

  console.log("Tasks array:", tasks);
}


// Add a new task when the button is clicked
addTaskBtn.addEventListener("click", function () {
  let title = titleInput.value.trim();
  let description = descInput.value.trim();

  if (title === "" || description === "") {
    errorText.textContent = "Please fill in the title and the description.";
    return;
  }

  tasks.push({ title: title, description: description });

  // Clear the form
  errorText.textContent = "";
  titleInput.value = "";
  descInput.value = "";

  renderTasks();
});
