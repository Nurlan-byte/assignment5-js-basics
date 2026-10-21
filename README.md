# Assignment #5. JavaScript Basics (DOM Manipulation & Events)

**Student:** Yussupov Nurlan
**Group:** SE-2526
**Course:** Web Technologies 1 (Front End), Astana IT University

**Live site:** https://nurlan-byte.github.io/assignment5-js-basics/

## Description

A small multi-page website where I practice the basics of JavaScript:
variables and operators, changing the DOM (text, styles, creating and removing
elements) and handling events (click, mouseover/mouseout, keyup).
A navbar on every page links to all parts of the assignment.

| Page | Tasks | What is inside |
|------|-------|----------------|
| `index.html` | Home | Student info and links to all parts |
| `part1.html` | Task 0, Task 1 | `console.log()` with name and group, `alert()`, variables (string, number, boolean), arithmetic, string concatenation |
| `part2.html` | Task 2, Task 3, Task 4 | Change paragraph text, change background color and font size of a `<div>`, add / remove `<li>` items |
| `part3.html` | Task 5, Task 6, Task 7 | `mouseover` / `mouseout` box, `keyup` live input, calculator (+ − × ÷) |
| `part4.html` | Task 8 | To-Do list: add task, delete task, mark as completed (strike-through), tasks stored in an array |

## Technologies

- HTML5
- CSS3 (`css/style.css`)
- Vanilla JavaScript (one file per part in `js/`)

## Main JavaScript methods used

- `document.getElementById()` — find an element on the page
- `element.addEventListener("click", function () { ... })` — react to events
- `element.textContent` — change the text of an element
- `element.style.backgroundColor`, `element.style.fontSize` — change styles
- `document.createElement()`, `appendChild()`, `remove()` — create and remove elements
- `array.push()`, `array.splice()` — add and remove tasks in the To-Do array

## How to run

**Online:** open https://nurlan-byte.github.io/assignment5-js-basics/

**Locally:**

```bash
git clone https://github.com/Nurlan-byte/assignment5-js-basics.git
cd assignment5-js-basics
```

Then open `index.html` in a browser (or use the Live Server extension in VS Code).
To see the output of Part 1, open the browser console: **F12 → Console**.

## Project structure

```
assignment5-js-basics/
├── index.html      # Home page
├── part1.html      # Task 0-1
├── part2.html      # Task 2-4
├── part3.html      # Task 5-7
├── part4.html      # Task 8 (To-Do list)
├── css/
│   └── style.css
├── js/
│   ├── part1.js
│   ├── part2.js
│   ├── part3.js
│   └── part4.js
└── README.md
```
