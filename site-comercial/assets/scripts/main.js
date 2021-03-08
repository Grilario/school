//Bug Scroll

function resetScroll(){
    window.scroll(0, scrollY)
}
window.onscroll = resetScroll

//Menu

const menu = document.getElementById("nav-menu")
const btn_open = document.getElementById("btn-open")
const btn_close = document.getElementById("btn-close")

function MenuOpen(){
    menu.classList.remove("invisible")
}

function MenuClose(){
    menu.classList.add("invisible")
}

btn_open.addEventListener('click', MenuOpen)
btn_close.addEventListener('click', MenuClose)

//Theme


const perfil = document.getElementsByClassName("perfil")[0]
var Dark = false

function ThemeDark(){
    document.body.classList.add("dark")
    Dark = true
    localStorage.setItem("dark", Dark)
}

function ThemeClear(){
    document.body.classList.remove("dark")
    Dark = false
    localStorage.setItem("dark", Dark)
}

function Theme(){
    if(Dark == true) ThemeClear()
    else ThemeDark()
}

if(localStorage.getItem("dark") == "true") ThemeDark()

perfil.addEventListener('click', Theme)

