/*const usuario = {
  nome: "Lucas",
  cargo: "Desenvolvedor",
  empresa: "TechCorp"
};

const apresentar = ({nome, cargo}) => `${nome} atua como: ${cargo}`

console.log(apresentar(usuario))

const produtos = [
  { id: 1, nome: "Teclado", preco: 150 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Monitor", preco: 900 }
];

const nomesEPrecos = produtos.map(({nome, preco}) => `${nome} - ${preco}R$`)

console.log(nomesEPrecos)

const criarDto = (id, statuss) => ({id: id,status: `${statuss}`})

console.log(criarDto(1, "Aberto"))

const usuarios = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Bruno", ativo: false },
  { id: 3, nome: "Carla", ativo: true }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

console.log(usuariosAtivos)

const tecnologias = ["Java", "Spring Boot"];

const minhasTecnologias = [...tecnologias, "react"]

console.log(minhasTecnologias)
const pedidos = [
  { 
    id: 101, 
    cliente: "Ana", 
    itens: [ { nome: "Teclado", preco: 150 }, { nome: "Mouse", preco: 50 } ], 
    pago: true 
  },
  { 
    id: 102, 
    cliente: "Bruno", 
    itens: [ { nome: "Monitor", preco: 900 } ], 
    pago: false 
  },
  { 
    id: 103, 
    cliente: "Carla", 
    itens: [ { nome: "Cadeira", preco: 1200 }, { nome: "Headset", preco: 300 } ], 
    pago: true 
  }
];

const relatorioPedidos = pedidos
  .filter(pedido => pedido.pago)
  .map(({ id, cliente, itens }) => ({
    id,
    cliente,
    total: itens.reduce((soma, { preco }) => soma + preco, 0),
    qtdItens: itens.length,
    status: "PRONTO_PARA_ENVIO"
  }));

  console.log(relatorioPedidos)

const usuariosBackend = [
  { id: 1, username: "carlos.dev", roles: ["ROLE_ADMIN", "ROLE_USER"], ativo: true },
  { id: 2, username: "ana.mkt", roles: ["ROLE_USER"], ativo: false },
  { id: 3, username: "beatriz.tech", roles: ["ROLE_ADMIN"], ativo: true }
];

const adminsAtivos = usuariosBackend
  .filter(({ ativo, roles }) => ativo && roles.includes("ROLE_ADMIN"))
  .map(({ id, username }) => ({
    id,
    tag: `@${username}`,
    isAdmin: true
  }));

  const carrinho = [
  { item: "Notebook", preco: 4000, quantidade: 1, cupom: 0.1 },  // 10% off
  { item: "Mouse", preco: 100, quantidade: 2, cupom: 0 },         // Sem desconto
  { item: "Teclado", preco: 200, quantidade: 0, cupom: 0.05 }     // Qtd zero (ignorar)
];

const totalCarrinho = carrinho
.filter(({quantidade}) => quantidade > 0)
.reduce((soma, {preco, quantidade, cupom}) => soma + (preco * quantidade) - (preco * cupom),0)

console.log(totalCarrinho)

const tarefas = [
  { id: 10, titulo: "Configurar Spring Security", concluida: false },
  { id: 20, titulo: "Criar DTOs do React", concluida: false }
];

const tarefasAtualizadas = tarefas
.map(({id, titulo, concluida}) => {
    if(id === 10){
        return ({id, titulo, concluida: true});
    } else {
        return ({id, titulo, concluida});
    }
})

console.log(tarefasAtualizadas)

// Função simulando a API do Spring Boot (retorna uma Promise)
const buscarDadosUsuario = async () => {
  return { id: 42, nome: "Lucas", perfil: "DESENVOLVEDOR", ativo: true };
};

const transacoes = [
  { categoria: "Alimentacao", valor: 50 },
  { categoria: "Transporte", valor: 20 },
  { categoria: "Alimentacao", valor: 30 }
];

const totais = transacoes.reduce((acumulador, { categoria, valor }) => {
  // 1. Testa se a chave já existe no objeto acumulador
  if (acumulador[categoria]) {
    // Se deu TRUE (já existe): soma o valor atual com o que já estava lá
    acumulador[categoria] += valor;
  } else {
    // Se deu FALSE/undefined (não existe): cria a chave com o valor inicial
    acumulador[categoria] = valor;
  }

  // 2. Retorna o objeto atualizado para a próxima volta do loop
  return acumulador;
}, {}); // <--- Começamos com o acumulador sendo um objeto vazio {}

console.log(totais)

const usuariosAPI = [
  { id: "usr-101", nome: "Ana", cargo: "Dev", ativo: true },
  { id: "usr-102", nome: "Carlos", cargo: "Design", ativo: false },
  { id: "usr-103", nome: "Beatriz", cargo: "Dev", ativo: true }
];

const estadoNormalizado = usuariosAPI
.reduce((contador, usuario) => {
    if(usuario.ativo){
      contador.allIds.push(usuario.id)
      contador.byId[usuario.id] = usuario 
    }
    return contador;
},{byId: {},allIds: []})


console.log(estadoNormalizado)

const precosEmReais = [15, 80, 120, 45];

const precosComSifrao = precosEmReais
.map(value => 
  `R$ ${value}`
)

console.log(precosComSifrao)

const produtosAPI = [
  { id: 1, nome: "Notebook", preco: 3000, ativo: true },
  { id: 2, nome: "Mouse", preco: 100, ativo: false },
  { id: 3, nome: "Teclado", preco: 200, ativo: true },
  { id: 4, nome: "Monitor", preco: 1200, ativo: true }
];

const produtosAPIAtivo = produtosAPI
.filter(produto => produto.ativo)
.map(({id, nome, preco}) => 
   ({id, nome, precoFinal: (preco * 0.9)})
)

console.log(produtosAPIAtivo)

const carrinho2 = [
  { item: "Camisa", preco: 50, quantidade: 2 },
  { item: "Calça", preco: 120, quantidade: 1 },
  { item: "Meia", preco: 15, quantidade: 4 }
];

const total = carrinho2
.reduce((acm, item) => 
   acm + (item.preco * item.quantidade)
,15)

console.log(total)

const carrinhoEstado = [
  { id: 1, nome: "Teclado", qtd: 1 },
  { id: 2, nome: "Mouse", qtd: 2 },
  { id: 3, nome: "Fone", qtd: 1 }
];

const carrinhoAlterado = carrinhoEstado
.map(item => 
  item.id === 2 ? {...item, qtd: 3} : item
)

console.log(carrinhoAlterado)
*/

const transacoes = [
  { id: 1, categoria: "Eletrônicos", valor: 100 },
  { id: 2, categoria: "Roupas", valor: 50 },
  { id: 3, categoria: "Eletrônicos", valor: 300 },
  { id: 4, categoria: "Alimentação", valor: 30 },
  { id: 5, categoria: "Roupas", valor: 80 }
];

const transacoesAcm = transacoes
.reduce((acm, item) => {
  acm[item.categoria] ? acm[item.categoria] += item.valor : acm[item.categoria] = item.valor
  return acm;
},{})

console.log(transacoesAcm)

const usuariosAPI = [
  { id: "usr_1", nome: "Lucas", nivel: "admin", ativo: true },
  { id: "usr_2", nome: "Ana", nivel: "user", ativo: false },
  { id: "usr_3", nome: "Carla", nivel: "user", ativo: true },
  { id: "usr_4", nome: "Diego", nivel: "admin", ativo: true }
];

const usuariosAPIFiltrado = usuariosAPI
.filter(usuario => usuario.ativo)
.reduce((acm, usuario) => {
  const {ativo, ...dadoDoUsuario} = usuario

  acm[usuario.id] = dadoDoUsuario
  return acm;
},{})

console.log(usuariosAPIFiltrado)

const produtos = [
  { nome: "Notebook", categoria: "Tech" },
  { nome: "Camisa", categoria: "Moda" },
  { nome: "Mouse", categoria: "Tech" },
  { nome: "Calça", categoria: "Moda" },
  { nome: "Fone", categoria: "Tech" }
];

const produtosCat = produtos
.reduce((acm, produto) => {
   acm[produto.categoria] ? acm[produto.categoria].push(produto.nome) : acm[produto.categoria] = [produto.nome]
  return acm
},{})

console.log(produtosCat)