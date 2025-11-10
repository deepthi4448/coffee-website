const navbarLiinks = document.querySelectorAll("nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-moblie-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navbarLiinks.forEach((link) =>{
    link.addEventListener("click", () => menuOpenButton.click());
});

let swiper = new swiper(".slider-wrapper",{
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        precEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
});