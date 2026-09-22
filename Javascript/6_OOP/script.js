const animal = {
    nome: "Bob",
    latir: function (){
        console.log("Au Au")
    }
}

animal.latir()

const pessoa = {
    nome: "Mateus",

    getNome: function (){
        return this.nome;
    },

    setNome: function(nome){
        this.nome = nome
    }
}

console.log(pessoa.getNome())

pessoa.setNome("Rei Emanuel")

console.log(pessoa.nome)

const text = "asd"

const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

const cachorro = {
    raca: null
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor alemao";

console.log(pastorAlemao.raca)

function criarCachorro (nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca;
    
    return cachorro;    
}

const cachorro1 = criarCachorro("Thor","Shi-tzu");

console.log(cachorro1)

function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Marlon", "Husky")

console.log(husky)

Cachorro.prototype.uivar = function(){console.log(`O ${this.nome} esta uivando`)}

husky.uivar()

class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome,
        this.raca = raca
    }

    uivar(){
        console.log(`O ${this.nome} esta uivando`)
    }
}

const dogs = new CachorroClasse("doguinho","Husky")

dogs.uivar()

