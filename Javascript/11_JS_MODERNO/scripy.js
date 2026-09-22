// var, let, const -> utilizar let e const

var x = 10;
var y = 15;

if(y > 10){
    var x = 5;
    console.log(x)
}
console.log(x)

let a = 10;
let b = 15;

if(b > 10){
    let a = 20;
    console.log(a)
}
console.log(a)

// Arrow Functions

const sum = function(a, b){
    return a + b
}

const sumArrow = (a, b) => a + b

console.log(sum(7,8))

console.log(sumArrow(7222,8))

const greeting = (name) => name ? `Olá ${name}` : `Olá`

console.log(greeting("Mateus"))

// Filter

const arr = [1, 2, 3, 4, 5, 6]

const pares = arr.filter(num => num % 2 === 0)

console.log(pares)

const highNumbers = arr.filter(n => n >= 3)

console.log(highNumbers)

// Map

const products = [
    {nome: "Camisa", preco: 10.99, categoria: "roupas"},
    {nome: "Shorts", preco: 8.99, categoria: "roupas"},
    {nome: "Telefone", preco: 1000, categoria: "Eletrönicos"},
    {nome: "Tablet", preco: 2000, categoria: "Eletronicos"},
]

const produtosPromocao = products.map(produto => produto.categoria.toLocaleLowerCase() === "roupas" ? {...produto, promocao: true} : {...produto, promocao: false})

console.log(produtosPromocao)

// Destructuring

const fruitsList = ["Maca", "Banana", "Melancia"]

const [maca, banana, melancia] = fruitsList

console.log(maca)

// Spread Operators

const l1 = [1, 2, 3]
const l2 = [4 , 5, 6]

const lObject = {l1: [...l1], l2: [...l2]}

const l3 = [...l1,...l2]

console.log(l3)
console.log(lObject)