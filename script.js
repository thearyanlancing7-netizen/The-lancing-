/* Cursor Glow */
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Reveal Sections on Scroll */
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
document.querySelectorAll("section").forEach(s => {
  s.classList.add("hidden");
  obs.observe(s);
});

/* Gauges Animation */
const gObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const g = entry.target;
    const needle = g.querySelector(".needle");
    const val = g.parentElement.querySelector(".value");
    const target = +g.dataset.value;
    let i = 0;
    needle.style.transform = `rotate(${(target/100)*180-90}deg)`; // set final angle
    const t = setInterval(()=>{
      val.textContent = i + "%";
      if(i++ >= target) clearInterval(t);
    },20);
    gObs.unobserve(g);
  });
});
document.querySelectorAll(".gauge").forEach(g => gObs.observe(g));

/* Bike-Style Speedometer for Projects Delivered */
const speedometers = document.querySelectorAll(".speedometer");
const speedObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const dial = entry.target;
    const needle = dial.querySelector(".speed-needle");
    const valueEl = dial.parentElement.querySelector(".speed-value");
    const target = +dial.dataset.value;
    let n = 0;

    const interval = setInterval(()=>{
      valueEl.textContent = n;
      // Map n from 0 → target to angle -90° (left) → +90° (right)
      let angle = -90 + (n/target) * 180;
      needle.style.transform = `rotate(${angle}deg)`;
      if(n++ >= target) clearInterval(interval);
    },35);

    speedObs.unobserve(dial);
  });
});
speedometers.forEach(s => speedObs.observe(s));

/* 3D Card Tilt Effect */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - 0.5;
    const y = (e.clientY - r.top)/r.height - 0.5;
    card.style.transform = `rotateY(${x*12}deg) rotateX(${-y*12}deg)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "rotateY(0deg) rotateX(0deg)");
});
