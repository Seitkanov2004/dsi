const menu = document.querySelector(".header--menu")
menu.addEventListener("click",() => {
    document.querySelector(".header--modal").style.display = "block"
})

const menuClose = document.querySelector(".header--modal__block--nav__x")
menuClose.addEventListener("click",() => {
    document.querySelector(".header--modal").style.display = "none"
})