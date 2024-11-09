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

//animation apparition effect
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
let scrollRevealLists = [
  ".header__content h4 ",
  ".header__content h1",
  ".header__content h2",
  ".header__btn",
  ".header__content p",
  ".intro__card",
  ".about__image img",
];
let delay = 500; // Définition de la variable delay avant la boucle
for (let i = 0; i < scrollRevealLists.length; i++) {
  revealAuto(scrollRevealLists[i], delay);
  delay += 50; // Incrémente le délai pour chaque élément
}

//factorisation of the bellow code up there ;)
// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };
// ScrollReveal().reveal(".header__content h4 ", {
//   ...scrollRevealOption,
// });
