/* 1 - Variaveis

let nome = "Mateus";

console.log(nome)

nome = "Lira";

console.log(nome)

const idade = 18;

console.log(idade)

// Prompt

//let age = prompt("Digite sua idade: ")

//alert("Testando")


/*

let array = [4.5, 8.0, 6.0, 9.5, 2.0]
let arrayAprovados = []
let arrayReprovados = []

for(let i = 0; i < array.length; i++){
    if(array[i] >= 7){
        console.log(`O aluno de numero de ${i} foi aprovado`)
        arrayAprovados.push(i)
    } else {
        console.log(`O aluno de numero de ${i} foi reprovado`)
        arrayReprovados.push(i)
    }
}

    console.log(`Os numeros dos aprovados foram ${arrayAprovados}`)
    console.log(`Os numeros dos reprovados foram ${arrayReprovados}`)
  

const m = 10;

if(m > 5){
    console.log(`Este numero e maior que 5`)
}

const nome2 = "Joao"

if(nome2 !== "Joao"){
    console.log("Parabens voce nao e joao")
}

const loggedIn = false

if(loggedIn === true){
    console.log(`O usuário está logado`)
} else {
    console.log(`O usuário nao esta logado`)
}

let produtos = ["Arroz", "Feijão", "Ovos"];
let precos = ["10", "8", "12"];

let precosNum = precos.map(Number)

let total = 0;

for (let i = 0; i < precosNum.length; i++) {
    total += precosNum[i];
}
console.log(13131)
console.log(`O valor total da compra é: R$ ${total}`);

let temperaturas = [20, 30, 17, 23, 40, 19]

for(let i = 0; i < temperaturas.length; i++){
    let verificador = temperaturas[i] >= 25 ? temperaturas[i]+`°C Está quente` : temperaturas[i]+`°C Está frio`
    console.log(verificador)
}

// Do while

let o = 0;
 
do{
    console.log(`O valor de o ${o}`)
    o++
} while (o <= 10)

//For

console.log(`Contagem regressiva: `)
for(let i = 10; i >= 0; i--){
    console.log(i)
}

let n = prompt(`Insira o valor que deseja buscar e sabera seu indice: `)
let verd = false

for(let i = 0; i < temperaturas.length; i++){
    if(n == temperaturas[i]){
        console.log(`Seu valor esta na posicao ${i}`)
        verd = true
        break
    }
}

if(verd === true){
    console.log(`O valor inserido existe no array`)
} else{
    console.log(`O valor nao existe no array`)
}
*/

let senha = `Marcao123`
let tentativa
do{
    tentativa = prompt(`Insira a senha: `)
} while (tentativa !== senha)
console.log(`Bem-Vindo!`)