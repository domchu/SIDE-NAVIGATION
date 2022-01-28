let bars = document.querySelector(".ham");
let mobileNavlink_ul = document.querySelector(".mobile-navlink ul");

bars.addEventListener("click", () => {
  if (bars.classList.contains("fa-bars")) {
    mobileNavlink_ul.style.maxHeight = "100vh";
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");
  } else {
    mobileNavlink_ul.style.maxHeight = "0";
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");
  }
});
