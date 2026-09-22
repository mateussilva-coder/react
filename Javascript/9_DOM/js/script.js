//Movendo-se pelo dom

console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

const listItems = document.getElementsByTagName("li")

console.log(listItems)

const title = document.getElementById("title")

console.log(title)

const products = document.getElementsByClassName("product");

console.log(products)

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#container")

// InsertBefore

const p = document.createElement("p")

console.log(p)

const header = title.parentElement

console.log(header)

header.insertBefore(p, title)

//AppendChild

const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")
li.textContent = "Abraco"

navLinks.appendChild(li)

console.log(navLinks)

//ReplaceChild

const h2 = document.createElement("h2")
h2.textContent = "Novo title"

header.replaceChild(h2,title)

// createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um titulo")

const h3 = document.createElement("h3")
h3.appendChild(myText)

mainContainer.appendChild(h3)

// trabalhando com atributos

const firstLink = navLinks.querySelector("a")

firstLink.setAttribute("href", "https://www.google.com")

// Altura e Largura

const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

// posicao do elemento

const product1 = products[0]

console.log(product1.getBoundingClientRect())

// CSS com Js

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "green"

//14 - Alterando estilos de varios elementos

for(const li of listItems){
    li.style.color = "blue"
}