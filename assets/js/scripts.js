document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileHeader = document.querySelector(".mobile-header");

  if (!toggle || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");

    if (openIcon) openIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "block";
    if (mobileHeader) mobileHeader.style.borderBottom = "none";

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");

    if (openIcon) openIcon.style.display = "block";
    if (closeIcon) closeIcon.style.display = "none";
    if (mobileHeader) mobileHeader.style.borderBottom = "";

    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const isCurrentlyOpen = menu.classList.contains("is-open");
    if (isCurrentlyOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});

const jump = document.getElementsByClassName("header-button-group")[0]
  .children[0].children[0];

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const items = [...document.querySelectorAll(".schedule-row")];
  if (!items.length) return;

  // Parse ISO dates from data-date or visible text
  const sessions = items
    .map((el) => {
      const iso =
        el.dataset.date || el.querySelector(".row-subtitle")?.textContent;
      const date = new Date(iso);
      return { el, date };
    })
    .filter((s) => !isNaN(s.date));

  //   // Find the next upcoming (or today) session
  //   const upcoming = sessions
  //     .sort((a, b) => a.date - b.date)
  //     .find((s) => s.date >= today);

  // Find the closest date (past or future)
  let upcoming = null;
  let minDiff = Infinity;

  sessions.forEach((s) => {
    const diff = Math.abs(s.date - today);
    if (diff < minDiff) {
      minDiff = diff;
      upcoming = s;
    }
  });

  if (upcoming) {
    upcoming.el.classList.add("upcoming");
    const id = `session-${upcoming.date.toISOString().split("T")[0]}`;
    upcoming.el.id = id;
    jump.href = `#${id}`;
    jump.innerText = `This week: ${upcoming.el.querySelector(".row-title h4").innerText}`;
  }

  if (!upcoming) return;
});
