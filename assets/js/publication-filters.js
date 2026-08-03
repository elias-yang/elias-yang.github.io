document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("[data-theme-filter]"));
  const sections = Array.from(document.querySelectorAll("[data-research-theme]"));

  if (buttons.length === 0 || sections.length === 0) return;

  const selectTheme = (theme) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.themeFilter === theme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    sections.forEach((section) => {
      section.hidden = theme !== "all" && section.dataset.researchTheme !== theme;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => selectTheme(button.dataset.themeFilter));
  });

  const requestedTheme = new URLSearchParams(window.location.search).get("theme");
  const availableThemes = new Set(buttons.map((button) => button.dataset.themeFilter));
  selectTheme(availableThemes.has(requestedTheme) ? requestedTheme : "all");
});
