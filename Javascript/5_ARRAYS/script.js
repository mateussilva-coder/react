/*const lista = [1, 2, 3, 4, 5];

console.log(lista);

const itens = ["Mateus", true, 4.55, 6];

console.log(itens);

const numbers = [5, 3, 4];

console.log(numbers.length);

const otherNumbers = [1, 2, 3];

const allNumbers = lista.concat(otherNumbers)

console.log(allNumbers)

const person = {
    name: "Mateus",
    age: 31
}
""
console.log(person.name)

const pedidosDoDia = [
  { cliente: "Marcos", item: "Hambúrguer", valor: 25, pago: true },
  { cliente: "Juliana", item: "Pizza", valor: 45, pago: false },
  { cliente: "Roberto", item: "Hambúrguer", valor: 25, pago: true },
  { cliente: "Fernanda", item: "Refrigerante", valor: 8, pago: true },
  { cliente: "Lucas", item: "Pizza", valor: 45, pago: false }
];

function verificadorDePedidos(array){
    let verificado = {
        totalEmCaixa: 0,
        caloteiro: [],
        vendasHamburguers: 0
    };

    for(let i = 0; i < array.length; i++){
        if(array[i].pago){
            verificado.totalEmCaixa += array[i].valor
        }

        if(!array[i].pago){
            verificado.caloteiro.push(array[i].cliente)
        }

        if(array[i].pago && array[i].item === "Hambúrguer")
            verificado.vendasHamburguers ++;
    }
    return verificado;
}

console.log(verificadorDePedidos(pedidosDoDia))

const relatorioBruto = [
  {
    cliente: "Lucas",
    vendedor: "Carlos",
    status: "aprovado",
    pago: true,
    itens: [
      { nome: "Teclado", preco: 200, categoria: "Periféricos", cupom: "OFF10" }, // 180
      { nome: "Mouse", preco: 100, categoria: "Periféricos", cupom: null }       // 100
    ]
  },
  {
    cliente: "Mariana",
    vendedor: "Ana",
    status: "cancelado",
    pago: false,
    itens: [
      { nome: "Monitor", preco: 1000, categoria: "Periféricos", cupom: "OFF20" }
    ]
  },
  {
    cliente: "Roberto",
    vendedor: "Carlos",
    status: "aprovado",
    pago: true,
    itens: [
      { nome: "Headset", preco: 300, categoria: "Áudio", cupom: "OFF20" }        // 240
    ]
  },
  {
    cliente: "Fernanda",
    vendedor: "Ana",
    status: "aprovado",
    pago: true,
    itens: [
      { nome: "Cadeira", preco: 800, categoria: "Móveis", cupom: null },         // 800
      { nome: "Mousepad", preco: 50, categoria: "Periféricos", cupom: "OFF10" }  // 45
    ]
  },
  {
    cliente: "Diego",
    vendedor: "Carlos",
    status: "aprovado",
    pago: false, // Não pagou!
    itens: [
      { nome: "Webcam", preco: 250, categoria: "Periféricos", cupom: null }
    ]
  }
];

function relatorio(array){
    let metricas = {
      faturamento: 0,
      comissaoVendedores: {
        Carlos: 0,
        Ana: 0,
      },
      itensPorCategoria: {
        perifericos: 0,
        audio: 0,
        moveis: 0
      },
      clientesComProblema: []
    };
    let comissaoCarlos = 0
    let comissaoAna = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].status !== "aprovado" || !array[i].pago){
          metricas.clientesComProblema.push(array[i].cliente)
        }      
        for(let j = 0; j < array[i].itens.length; j++){

          let cat = array[i].itens[j].categoria;

          if(array[i].status === "aprovado" && array[i].pago){
            let valor = array[i].itens[j].preco;

            switch(array[i].itens[j].cupom){
              case null:
                metricas.faturamento += valor
                if(array[i].vendedor === "Ana"){
                  comissaoAna += valor;
                } else {
                  comissaoCarlos += valor;
                }
                break;
              case "OFF10":
                console.log('b')
                const desc10 = (valor -(valor * 0.10));
                metricas.faturamento += desc10;
                if(array[i].vendedor === "Ana"){
                  comissaoAna += desc10;
                } else {
                  comissaoCarlos += desc10;
                }                
                break;
              case "OFF20":
                console.log('c')
                let desc20 = (valor -(valor * 0.20));
                metricas.faturamento += desc20;
                if(array[i].vendedor === "Ana"){
                  comissaoAna += desc20;
                } else {
                  comissaoCarlos += desc20;
                }                  
                break;
              default:
            }    
          }

          if(cat === "Periféricos"){
            metricas.itensPorCategoria.perifericos ++;
          } else if (cat === "Áudio"){
            metricas.itensPorCategoria.audio ++;
          } else {
            metricas.itensPorCategoria.moveis ++;
          }
        }
    }
      comissaoAna = comissaoAna * 0.05
      comissaoCarlos *= 0.05; 
      
      metricas.comissaoVendedores.Ana = comissaoAna;
      metricas.comissaoVendedores.Carlos = comissaoCarlos;

    return metricas;
}

console.log(relatorio(relatorioBruto));

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000
}

car.doors = 4;

console.log(car)

delete car.km;

console.log(car)

// Mais sobre objetos 

const obj = {
  a: "Teste",
  b: true
}

console.log(obj instanceof Object)

const obj2 = {
  c: []
}

Object.assign(obj2,obj)

console.log(obj2)

console.log(Object.keys(obj))
console.log(Object.entries(relatorioBruto))

const a = {
  name: "Mateus"
};

const users = ["Mateus", "Leonardo", "Caio", "Alba"]

users.forEach((user, index) => {
  console.log(user)
});

const letters = ["a", "b", "c", "d", "d"]

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("a1", "a2", "a3")

console.log(letters)

console.log(letters.indexOf("d"))

console.log(letters.lastIndexOf("d"))

const testeSlice = ["a", "b", "c", "d", "e", "f",]

const newSlice = testeSlice.slice(2,5)

newSlice.push("dadadad")

console.log(testeSlice)
console.log(newSlice)

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero)=>{
  console.log(`O numero e ${numero}`)
})

//Reverse

const reverseTeste = [1, 2, 3, 4, 5];

console.log(reverseTeste.reverse())
console.log(reverseTeste)

const trimTeste = "         Mateus      ";
const novoTrim = trimTeste.trim();

console.log(trimTeste)
console.log(novoTrim)

const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

*/

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const novos = itensParaComprar.join(",")

console.log(novos)

const somaInfinita = (...args) => {
      let sum = 0;
      for(let i = 0; i < args.length; i++){
        sum+= args[i];
      }
      return sum;
}

console.log(somaInfinita(1, 2, 3, 4, 5, 5, 6))

const somaInfinita2 = (...args) => {
      let total = 0;

      for(num of args){
        total += num;
      }

      return total;
}

console.log(somaInfinita(1, 2, 3, 4, 5, 5, 6))

// Destructuring

const userDetails = {
  firstname: "Mateus",
  lastName: "Lira",
  profissao: "Programador"
}

const{firstname, lastName, profissao} = userDetails;

console.log(firstname)

// Renomear as variáveis

const {firstname: nomezao} = userDetails

const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoC)

const myJson = '{"name": "mateus", "age": 18, "skils": ["Python", "Java"]}'

const myObject = JSON.parse(myJson)

console.log(myObject)


myObject.Caraca = true;

const myNewObject = JSON.stringify(myObject)

console.log(myNewObject)

