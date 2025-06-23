const line = document.getElementById("line");

// Example: Pause rotation on click, resume on second click
let isRotating = true;

line.addEventListener("click", () => {
  if (isRotating) {
    line.style.animationPlayState = "paused";
  } else {
    line.style.animationPlayState = "running";
  }
  isRotating = !isRotating;
});
