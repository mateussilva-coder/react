"use strict";

let opa = "teste";





let a = 1;
let b = 2;

if(a == 1){
    a = b + 2;
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}

console.log(a)

let c = 1;
let d = 2;

if(c === 1){
    d = d + 2;
}


for(let i = 0; i < d; i++){
    c = c + 2;
}

console.log("dadadadada")

function checkNumber(n){


    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto")
        return;
    }
    
    console.log("Valor correto!")
    return;
}

checkNumber(5);
checkNumber("1");
checkNumber(7.5);
checkNumber({});

let x = 10;

/*if(x != 11){
    throw new Error("O valor de X nao e 11")
}
*/

try{
    const soma = x + y
} catch(error){
    console.log(`Erro no programa ${error}`)
}

try{
    const value = checkNumber("dada")

    if(!value){
        throw new Error("Valores Invalidos")
    }
} catch(error){
    console.log(`Opa aconteceu algo ${error}`)
} finally {
    console.log("Isso foi executado")
}

