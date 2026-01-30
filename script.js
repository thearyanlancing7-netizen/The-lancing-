const counter = document.getElementById("projectsCount");
const needle = document.querySelector(".speed-needle");

// Set your final number here
let target = 64;

let current = 0;
let speed = 25;
let started = false;

// Animate number + needle
function updateCounter() {
  if (current < target) {
    current++;
    counter.innerText = current;

    // map number to needle rotation (-90deg to 90deg)
    let rotation = -90 + (current / target) * 180;

    if (needle) {
      needle.style.transform = `rotate(${rotation}deg)`;
    }

    setTimeout(updateCounter, speed);
  } else {
    counter.innerText = target;

    if (needle) {
      needle.style.transform = `rotate(90deg)`;
    }
  }
}

// Run only when visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;
      updateCounter();
    }
  });
}, { threshold: 0.5 });

if (counter) {
  observer.observe(counter);
}
