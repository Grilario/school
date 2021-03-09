const menssage = document.getElementsByClassName('menssage')[0]

function aninMenssage() {
    menssage.style.bottom = "2rem"

    setTimeout(() => {menssage.style.bottom = "-5rem"}, 1800)
}

function generateColors(){

        
    const divCores = document.querySelectorAll('.col-md')

    for(i = 0; i < divCores.length; i++){
        const cor = `#${(Math.random() * 0xFFFFFF<<0).toString(16)}`

        divCores[i].firstElementChild.style.backgroundColor = cor
        divCores[i].lastElementChild.textContent = cor
    }
}

function copy() {
    const element = event.currentTarget

    navigator.clipboard.writeText(element.lastElementChild.textContent)

    console.log(element.lastElementChild.textContent)

    aninMenssage()
}

generateColors()