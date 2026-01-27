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
    jump.href = `#${upcoming.el.id}`;
    jump.innerText = `This week: ${upcoming.el.querySelector(".row-title h4").innerText}`;
  }

  if (!upcoming) return;
});
