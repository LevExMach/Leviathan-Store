const toggle = document.querySelector('.toggle')
const sideBar = document.querySelector('.sidebar')

toggle.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})

