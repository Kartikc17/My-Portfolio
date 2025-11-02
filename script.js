// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll fade-in animation
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Highlight active nav link
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
