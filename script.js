const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.menu');

navToggle.addEventListener('click',() => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEL: ".swiper-button-next",
        prevEL: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});