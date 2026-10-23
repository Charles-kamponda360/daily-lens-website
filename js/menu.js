/* ===== Navigation: mobile menu, dropdowns, back-to-top ===== */
(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Dropdowns: on touch/narrow screens the first tap opens the menu,
  // a second tap on the same heading follows its link.
  document.querySelectorAll(".has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768 || "ontouchstart" in window) {
        const parent = link.parentElement;
        if (parent.classList.contains("open")) return;
        e.preventDefault();
        document.querySelectorAll(".has-dropdown.open").forEach(function (o) { o.classList.remove("open"); });
        parent.classList.add("open");
      }
    });
  });

  // Close dropdowns when clicking elsewhere
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach(function (o) { o.classList.remove("open"); });
    }
  });

  // Back to top button
  const backTop = document.getElementById("backTop");
  if (backTop) {
    window.addEventListener("scroll", function () {
      backTop.classList.toggle("show", window.scrollY > 400);
    });
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Highlight the current page in the nav
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a.nav-link").forEach(function (a) {
    if (a.getAttribute("href") && a.getAttribute("href").split("/").pop() === here) {
      a.classList.add("active");
    }
  });
})();
