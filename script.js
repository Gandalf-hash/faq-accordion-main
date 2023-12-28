function toggleDropdown(element) {
  const icon = element.querySelector(".icon");
  const description = element.querySelector(".description");

  icon.classList.toggle("open");
  description.style.display = icon.classList.contains("open")
    ? "block"
    : "none";

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    if (dropdown !== element) {
      const otherIcon = dropdown.querySelector(".icon");
      const otherDescription = dropdown.querySelector(".description");
      otherIcon.classList.remove("open");
      otherDescription.style.display = "none";
    }
  });
}
