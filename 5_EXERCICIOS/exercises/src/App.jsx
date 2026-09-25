import { useState } from 'react'
import './App.css'
import FormAnuncio from './components/ex1/FormAnuncio'
import CardImovel from './components/ex1/CardImovel'
import FormVeiculo from './components/ex2/FormVeiculo'
import ListaVeiculos from './components/ex2/ListaVeiculo'


function App() {

const [imoveis, setImoveis] = useState([
{
      id: 1,
      titulo: "Apê 2 quartos com varanda",
      preco: 350000,
      canal: "VivaReal",
      isDestaque: true,
      leadsZap: 5
    },
    {
      id: 2,
      titulo: "Casa em condomínio fechado",
      preco: 850000,
      canal: "ZAP",
      isDestaque: false,
      leadsZap: 2
    } 
])

const adicionarImovel = (novoImovel) => {
  setImoveis((prev) => [...prev, novoImovel])
}

const deletarImovel = (id) => {
  setImoveis((prev) => prev.filter(imovel => imovel.id !== id))
} 

const adicionarLead = (id) => {
  setImoveis((prev) => prev.map(imovel => {
    if(imovel.id === id){
      return {...imovel, leadsZap: imovel.leadsZap + 1}
    }
    return imovel
  }))
}

const [veiculos, setVeiculos] = useState([
  {
    id: 1,
    modelo: 'Honda Civic',
    preco: 95000,
    categoria: 'Sede',
    status: 'Disponível'
  },
  {
    id: 2,
    modelo: 'Chevrolet Tracker',
    preco: 110000,
    categoria: 'SUV',
    status: 'Vendido'
  }
])

const adicionarVeiculo = (novoVeiculo) => {
  setVeiculos((prev) => [...prev, novoVeiculo])
}

const toggleStatus = (id) => {
  setVeiculos((prev) => prev.map(veiculo => {
    if(veiculo.id === id){
      return {...veiculo, status: veiculo.status === "Disponível" ? "Vendido" : "Disponível"}
    }
    return veiculo
  }))
}

const aplicarDesconto = (id) => {
  setVeiculos((prev) => prev.map(veiculo => {
    if(veiculo.id === id){
      return {...veiculo, preco: veiculo.preco * 0.9}
    }
    return veiculo
  }))
}

const deletarVeiculo = (id) => {
  setVeiculos((prev) => prev.filter(veiculo => veiculo.id !== id))
}

  return (
    <div>
        <h1>Gestão de Imóveis e Leads</h1>

        <FormAnuncio onAdicionarImovel={adicionarImovel}/>

      {imoveis.length === 0 ? (<p>Não há imóveis disponíveis</p>) : (
        imoveis.map(imovel => (
        <CardImovel key={imovel.id} imovel={imovel} onDeletar={deletarImovel} onAdicionarLead={adicionarLead}/>
        ))
      )}

      <hr />

      <FormVeiculo onAdicionarVeiculo={adicionarVeiculo}/>

      <h1>🏎️ Gestor de Carros</h1>
      
      {/* 1. Formulário para Cadastrar */}
      <FormVeiculo onAdicionarVeiculo={adicionarVeiculo} />

      <hr style={{ margin: '20px 0' }} />

      {/* 2. Lista para Exibir e Interagir */}
      <ListaVeiculos 
        veiculos={veiculos} 
        onToggleStatus={toggleStatus} 
        onAplicarDesconto={aplicarDesconto} 
        onDeletar={deletarVeiculo} 
      />
    </div> 
  )
}

export default App
