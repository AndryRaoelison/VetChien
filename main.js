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

//Animation apparition effect
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
  ".service__card",
];
let delay = 500; //Making an animation of reaveal with a delay + 50 ms for each elements of scrollRevealLists
for (let i = 0; i < scrollRevealLists.length; i++) {
  revealAuto(scrollRevealLists[i], delay);
  delay += 50;
}

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});
