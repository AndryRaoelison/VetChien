//Toggle menu management
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//animation apparation effect
function revealAuto(content, delay) {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  ScrollReveal().reveal(content, {
    ...scrollRevealOption,
    delay: delay,
  });
}
const scrollRevealLists = [
  ".header__content h4 ",
  ".header__content h1",
  ".header__content h2",
  ".header__btn",
  ".header__content p",
];
let delay = 500;
scrollRevealLists.forEach((revealList) => {
  revealAuto(revealList, delay);
  delay += 250;
});

//factorisation up there ;)
// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// ScrollReveal().reveal(".header__content h4 ", {
//   ...scrollRevealOption,
// });
