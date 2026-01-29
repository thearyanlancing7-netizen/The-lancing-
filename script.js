// Get the counter element
const counter = document.getElementById("projectsCount");

// Set your target number (change 0 to your current number of projects)
let target = 0;  

let current = 0;
let speed = 50; // lower number = faster increment

// Only run if target > 0
if (target > 0) {
  const interval = setInterval(() => {
    current++;
    counter.innerText = current;

    if (current >= target) {
      clearInterval(interval); // stop the counter
    }
  }, speed);
} else {
  // If no projects yet, just show 0
  counter.innerText = 0;
}
