

const toggle = document.querySelector('.toggle')
const sideBar = document.querySelector('.sidebar')

toggle.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
});


