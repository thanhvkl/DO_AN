$(".slider").slick({
  nextArrow:
    '<button class="any-class-name-you-want-next"><i class="fa-solid fa-chevron-right"></i></button>',
  prevArrow:
    '<button class="any-class-name-you-want-previous"><i class="fa-solid fa-chevron-left"></i></button>',
});

$(".customer__slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: false,
});

const btnOpenNav = document.querySelector(".header__menu");
const navMobile = document.querySelector(".menu__mobile");
const btnCloseNav = document.querySelector(".menu__mobile__close");
const body = document.querySelector("body");

btnOpenNav.addEventListener("click", () => {
  navMobile.classList.add("active");
  body.style.height = "100vh";
  body.style.overflow = "hidden";
});
btnCloseNav.addEventListener("click", () => {
  navMobile.classList.remove("active");
  body.style.height = "";
  body.style.overflow = "";
});
