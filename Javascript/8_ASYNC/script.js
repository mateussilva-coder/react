//SetTimeout

console.log("Ainda não executou")

setTimeout(function(){

    console.log("Requisicao assincrona");

}, 2000)

console.log("Ainda não executou2")

//SetInterval -> Funcao que acontece de Tempos em Tempos

console.log("Ainda não comecou")

//setInterval(function(){
//   console.log("Esperando!")
//},3000)

console.log("Ainda não comecou 2")

//Promises

const promessa = Promise.resolve(5 + 5);

console.log("Algum Codigo")

promessa.then(value =>{
    console.log(`A soma e ${value}`)
})

console.log("Algum Codigo 2")

//Falha nas Promises

Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error("Valores invalidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))

//Rejeicao

function checkNumber(n){
    return new Promise((resolve, reject)=>{
        if(n>10){
            resolve(`O numero e maior que 10`)
        } else{
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(50)
const b = checkNumber(5)

a.then((v) => console.log(`O resultado e ${v}`))
 .catch((err) => console.log(`Ocorreu um erro: ${err}`));

b.then((v) => console.log(`O resultado e ${v}`))
 .catch((err) => console.log(`Ocorreu um erro: ${err}`));

//Async functions

async function somarComDelay(a, b){
    return a+b
}

somarComDelay(2,44).then((value) => {
    console.log(value)
},3000)

//async await

function resolverComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a promise")
        },2000)
    })
}

async function chamadaAsync(){
    console.log("Chamando a promise e esperando o resultado")

    const result = await resolverComDelay()

    console.log(`O resultado chegou ${result}`)
}

chamadaAsync();