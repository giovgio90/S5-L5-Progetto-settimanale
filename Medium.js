//Navbar colour change

const navbar = document.getElementById("all-nav");
const section1 = document.querySelector(".section1");
const getStartedButton = document.querySelector("#all-nav .button1");

window.addEventListener("scroll", function () {
  const section1Height = section1.clientHeight;
  const startFadeInPoint = section1Height * 0.8;

  if (window.scrollY > startFadeInPoint) {
    navbar.classList.add("fade-in");
    getStartedButton.classList.add("fade-in");
  } else {
    navbar.classList.remove("fade-in");
    getStartedButton.classList.remove("fade-in");
  }
});
