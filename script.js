document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Scroll Reveal
  ========================= */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
  });

  /* =========================
     Skills Accordion
  ========================= */
  document.querySelectorAll(".skill-header").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".arrow");
      const isOpen = content.classList.contains("open");

      document.querySelectorAll(".skill-content").forEach(c => c.classList.remove("open"));
      document.querySelectorAll(".arrow").forEach(a => (a.textContent = "↓"));

      if (!isOpen) {
        content.classList.add("open");
        arrow.textContent = "↑";
      }
    });
  });

  /* =========================
     Navbar Hide / Show
  ========================= */
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      navbar.classList.add("hide");   // scroll down
    } else {
      navbar.classList.remove("hide"); // scroll up
    }

    lastScrollY = currentScrollY;
  });

});
