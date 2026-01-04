// Sichtbarkeit Fade-In beim Scroll
const faders = document.querySelectorAll('.fade');
const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Card Klick Navigation
function goToPage(url) {
  window.location.href = url;
}
