// Fade-in on scroll
const fades = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{ threshold:0.2 });
fades.forEach(fade => observer.observe(fade));

// Card click to subpage
function goToPage(url){ window.location.href = url; }
