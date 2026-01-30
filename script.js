/* ================================
   CURSOR GLOW
================================ */
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


/* ================================
   REVEAL ON SCROLL
================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("hidden");
  revealObserver.observe(sec);
});


/* ================================
   FUTURISTIC PROJECT COUNTER
================================ */
const meter = document.getElementById("futureMeter");
const arc = document.getElementById("futureArc");
const counter = document.getElementById("projectsCount");

let target = 64;   // CHANGE THIS WHEN YOU GET REAL PROJECTS 🙂
let current = 0;

function animateCounter() {
  if (current <= target) {

    counter.textContent = current;

    const deg = (current / target) * 180;
    arc.style.setProperty("--progress", deg + "deg");

    current++;

    requestAnimationFrame(() => {
      setTimeout(animateCounter, 22);
    });

  } else {
    meter.classList.add("complete");
  }
}

/* Start only when visible */
if (meter) {
  const meterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounter();
      meterObserver.disconnect();
    }
  }, { threshold: 0.6 });

  meterObserver.observe(meter);
}


/* ================================
   3D CARD TILT
================================ */
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform =
      `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });

});
