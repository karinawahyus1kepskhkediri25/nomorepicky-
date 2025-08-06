document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu-horizontal a");
  const welcome = document.getElementById("awal");
  const toggleBtn = document.getElementById("toggle-menu");
  const menuContainer = document.getElementById("menu-links");
  const toTopBtn = document.getElementById("toTopBtn");

  // Tampilkan hanya section awal
  sections.forEach(sec => sec.style.display = "none");
  if (welcome) welcome.style.display = "block";

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach(sec => sec.style.display = "none");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      menuContainer.classList.remove("show");
    });
  });

  toggleBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("show");
  });

  // Tombol to top muncul saat scroll
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };
});

// Lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;