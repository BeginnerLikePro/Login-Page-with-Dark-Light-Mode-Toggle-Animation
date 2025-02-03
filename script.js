const switchContainer = document.querySelector(".switch-container");
const allElements = document.body.querySelectorAll("*");

switchContainer.addEventListener("click", () => {
  allElements.forEach((e) => e.classList.toggle("dark"));
});
