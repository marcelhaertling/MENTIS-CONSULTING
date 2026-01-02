const observer = new IntersectionObserver(entries => {
entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: 0.15 });
document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
const hero = document.getElementById('hero');
const heroImages = [
    'https://images.pexels.com/photos/3859979/pexels-photo-3859979.jpeg',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg'
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
const banner = document.getElementById('cookieBanner');
const btn = document.getElementById('acceptCookies');
btn.addEventListener('click', () => { banner.style.display='none'; localStorage.setItem('cookiesAccepted','true'); });
if(localStorage.getItem('cookiesAccepted')) banner.style.display='none';
document.addEventListener("DOMContentLoaded",()=>{ document.body.classList.add("visible","fade-page"); });