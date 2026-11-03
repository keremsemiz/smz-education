(() => {
  const grid = document.querySelector("#projects-grid");
  const sortSelect = document.querySelector("#project-sort");

  if (!grid || !sortSelect) return;

  const cards = Array.from(grid.children).filter((card) =>
    card.classList.contains("course")
  );

  const parseDate = (dateText) => {
    const [day, month, year] = dateText.split("/").map(Number);
    return {
      iso: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      timestamp: Date.UTC(year, month - 1, day),
    };
  };

  cards.forEach((card) => {
    const dateElement = card.querySelector(".course__date");
    const actionElement = card.querySelector(".course__text .btn");
    const actionText = actionElement?.textContent.trim().toLowerCase() || "";
    const status = actionText.includes("under development")
      ? "development"
      : "complete";
    const date = parseDate(dateElement.textContent.trim());

    card.dataset.date = date.iso;
    card.dataset.timestamp = String(date.timestamp);
    card.dataset.status = status;
  });

  const compareByDate = (a, b, direction) =>
    direction * (Number(a.dataset.timestamp) - Number(b.dataset.timestamp));

  const updateProjects = () => {
    const sortValue = sortSelect.value;
    const sortedCards = [...cards].sort((a, b) => {
      if (sortValue === "date-asc") return compareByDate(a, b, 1);
      if (sortValue === "date-desc") return compareByDate(a, b, -1);

      const completedFirst = sortValue === "completed-first";
      const statusOrder = completedFirst
        ? { complete: 0, development: 1 }
        : { development: 0, complete: 1 };
      const statusDifference =
        statusOrder[a.dataset.status] - statusOrder[b.dataset.status];

      return statusDifference || compareByDate(a, b, -1);
    });

    grid.append(...sortedCards);
  };

  sortSelect.addEventListener("change", updateProjects);
  updateProjects();
})();
