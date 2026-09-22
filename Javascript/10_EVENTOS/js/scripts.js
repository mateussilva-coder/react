//Adicionando Eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("Voce clicou")
    alert("Voce Clicou")
})

const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click",imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
        console.log("Evento Removido")
        secondBtn.removeEventListener("click",imprimirMensagem)
})

// Argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.offsetX)
})

const containerBtn = document.querySelector("#btn-container")
const btnInside = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInside.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// Removendo evento padrao

const link = document.querySelector("a")

link.addEventListener("click", (e) => {
    
    e.preventDefault()

    console.log("Nao Alterou a pagina")
})

document.addEventListener("keyup", (e) => {
    
    console.log(`O usuario soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    
    console.log(`O usuario apertou a tecla ${e.key}`)
})