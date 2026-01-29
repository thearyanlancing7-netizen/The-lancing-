// animated counter
let target = 0; // 👈 change to your project count
let count = 0;

const el = document.getElementById("projectsCount");

const interval = setInterval(() => {
  count++;
  el.innerText = count;

  if (count === target) clearInterval(interval);
}, 30);
