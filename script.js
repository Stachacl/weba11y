const lightModeToggle = document.querySelector(".light-mode-toggle");

lightModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});
