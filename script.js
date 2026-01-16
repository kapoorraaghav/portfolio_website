document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Scroll Reveal (Observer)
  ========================= */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
  });


  /* =========================
     Skills Accordion
  ========================= */
  const headers = document.querySelectorAll(".skill-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".arrow");
      const isOpen = content.classList.contains("open");

      // Close all sections
      document.querySelectorAll(".skill-content").forEach(c => {
        c.classList.remove("open");
      });

      document.querySelectorAll(".arrow").forEach(a => {
        a.textContent = "↓";
      });

      // Open clicked section
      if (!isOpen) {
        content.classList.add("open");
        arrow.textContent = "↑";
      }
    });
  });

});
