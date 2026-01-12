document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade");
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      obs.unobserve(e.target);
    });
  }, { threshold: 0.2 });

  faders.forEach(el => io.observe(el));
});
