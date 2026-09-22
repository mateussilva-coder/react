/*/ 1 - Criando uma funcao 

function minhaFuncao(){
    console.log(`Minha nova funcao`)
}

minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function(){
    console.log(`Minha funcao`)
}

minhaFuncaoEmVariavel()

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(19, 4))

const pokedex = (nome, tipo) => `O pokemon ${nome} e do tipo ${tipo}`

console.log(pokedex(`Pikachu`, `Eletrico`))

const desconto = (valor, desconto) => {
    if(desconto > valor){
        return 0
    } else {
        return valor - desconto;
    }
}

let v = desconto(110,290)

if(v > 0){
    console.log(`O valor do seu produto agora é: ${v}`)
} else {
    console.log(`Parebéns seu produto esta de graca`)
} 

// Escopo aninhado 

let m = 10

function escopoAninhado(){
    let m = 20
}

// Arrow Function

const testeArrow = () => {console.log(`Esta é uma arrow function`)}

testeArrow();

const parOuImpar = (n1) => {
    if(n1 % 2 === 0){
        return `par`;
    } else {
        return `impar`
    }
}

console.log(parOuImpar(5))

// Mais sobre arrow function

const raizQuadrada = (n1) => Math.pow(n1, 2)

console.log(raizQuadrada(7))
*/



const numeros = [12, 5, 8, 21, 3, 15, 10];

const analisar = (nums) => {
    let verificador = [];
    let maior = nums[0];
    let menor = nums[0]
    let media = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > maior){
            maior = nums[i];
        }

        if(nums[i] < menor){
            menor = nums[i];
        }

        media += nums[i];
    }

    media = media / nums.length

    verificador.push(maior);
    verificador.push(menor);
    verificador.push(Number(media.toFixed(2)));

    return verificador
}

console.log(analisar(numeros));

const garagem = [
    { modelo: "Uno", preco: 15000, opcionais: ["trava", "alarme"] },
    { modelo: "Civic", preco: 50000, opcionais: ["ar", "direcao", "couro"] },
    { modelo: "Gol", preco: 25000, opcionais: ["ar", "trava"] },
    { modelo: "Corolla", preco: 60000, opcionais: ["ar", "direcao", "couro"] }
];
console.log(garagem)
if("ar" === garagem[2].opcionais[0]){
    console.log(`eeeeeffa`);
}

const buscar = (lista, opcionalDesejado, precoMaximo) => {
    for(let i = 0; i < lista.length; i++){
    if(lista[i].opcionais.includes(opcionalDesejado) && precoMaximo >= lista[i].preco){
        console.log(`Modelo ${lista[i].modelo}, preco ${lista[i].preco}`)
    }        
    }
}

buscar(garagem, "ar", 150000)

// Closure

function someFunction(){

    let txt = "Alguma coisa";

    function exibir() {
        console.log(txt)
    }
    exibir()
}

someFunction()

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1)

console.log(c2)

console.log(c1(6))
console.log(c1(7))

// Recursion



const calcularDesconto = (valor, desconto) => {return valor -= (valor * desconto/100)}

console.log(calcularDesconto(100, 10))

const calcularNota = (nota) =>{
    let message;
    if(nota >= 7){
        message = "Aprovado"
    } else if(nota >= 5){
        message = "Recuperacao"
    } else {
        message = "Reprovado"
    }
    return message
}

function criarSaudacao(saldacao) {
    let saldar = saldacao
    return function saldo(nome1){
        console.log(saldacao + nome1)
    }
}

const saudarBomDia = criarSaudacao("Bom dia ")
saudarBomDia("Marcos")
