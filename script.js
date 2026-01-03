// Modal Logic
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const target = card.getAttribute("data-target");
    document.getElementById(target).style.display = "flex";
  });
});

closes.forEach(span => {
  span.addEventListener("click", () => {
    span.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// Smooth Page Transitions for footer links
document.querySelectorAll('footer a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.body.style.opacity = 0;
    setTimeout(()=> window.location.href = href, 400);
  });
});
