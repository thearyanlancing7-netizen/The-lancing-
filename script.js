const counter = document.getElementById("projectsCount");

// Change this to your actual project count
let target = 0;

let current = 0;
let speed = 50; // lower = faster

// Function to increment safely
function updateCounter() {
  if (current < target) {
    current++;
    counter.innerText = current;
    setTimeout(updateCounter, speed);
  } else {
    counter.innerText = target; // ensure it ends exactly at target
  }
}

// Start the counter only if the element exists
if (counter) {
  updateCounter();
}
