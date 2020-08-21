const colors = document.querySelectorAll(".color");

function handleColorClick(event) {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const color = event.target.style.backgroundColor;
  if (color == "white") {
    console.log("hi");
  } else if (color == "black") {
    console.log("bye");
  } else if (color == "gray") {
    console.log("it is gray");
  } else if (color == "blue") {
    console.log("this is blue color");
  } else {
    console.log("this is red color");
  }
  div.appendChild(span);
}

function init() {
  Array.from(colors).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
}

init();
