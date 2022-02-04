"use strict";

let input = document.getElementById("task__input");

// Return true if user input is not an empty string
const checkInput = function (text) {
  return text == "" ? false : true;
};

// Add an element to the HTML
document.querySelector("#add").addEventListener("click", function () {
  let item = document.querySelector("#task__input").value;
  document.querySelector("#task__input").value = ""; // Erase input field value to ""
  if (!checkInput(item)) {
    alert("Please enter a valid task.");
    return;
  } else {
    let text = document.createTextNode(item);
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-times");
    btn.classList.add("list__button");
    li.classList.add("list__element");
    li.appendChild(btn);
    li.appendChild(text);
    btn.appendChild(icon);
    document.querySelector(".list").appendChild(li);
    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});

// Add reset event handler to button
document.querySelector("#reset").addEventListener("click", () => {
  let list = document.querySelector(".list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});
// Integrate the return or enter keyboard key with Add event handler
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

//document.querySelectorAll(".delete").addEventListener("click", function () {});
