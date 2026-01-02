const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: 0.15 });
document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// HERO SLIDER
const hero = document.getElementById('hero');
const heroImages = [
    'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    'https://images.pexels.com/photos/265037/pexels-photo-265037.jpeg'
];
let currentHero = 0;
function changeHero() {
    currentHero = (currentHero + 1) % heroImages.length;
    const img = new Image();
    img.src = heroImages[currentHero];
    img.onload = () => { hero.style.transition = 'background-image 1.2s ease-in-out'; hero.style.backgroundImage = `url(${heroImages[currentHero]})`; }
}
hero.style.backgroundImage = `url(${heroImages[0]})`;
setInterval(changeHero, 6000);

// Cookie Banner
const banner = document.getElementById('cookieBanner');
const btn = document.getElementById('acceptCookies');
btn.addEventListener('click', () => { banner.style.display='none'; localStorage.setItem('cookiesAccepted','true'); });
if(localStorage.getItem('cookiesAccepted')) banner.style.display='none';

// Page fade-in
document.addEventListener("DOMContentLoaded",()=>{ document.body.classList.add("visible","fade-page"); });