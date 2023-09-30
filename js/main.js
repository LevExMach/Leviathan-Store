

const toggle = document.querySelector('.toggle')
const sideBar = document.querySelector('.sidebar')

toggle.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})

document.onclick = function(e) {
    if (!toggle.contains(e.target)) {
        sideBar.classList.add('close')
    }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
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
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
});


