import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FormAnuncio from './components/FormAnuncio'

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

  return (
    <div>

        <FormAnuncio/>

      {imoveis.length === 0 ? (<p>Não há imóveis disponíveis</p>) : (
        imoveis.map(imovel => (
          <p key={imovel.id}>Titulo: {imovel.titulo}, Preco: {imovel.preco} Canal: {imovel.canal}, Destaque: {imovel.isDestaque}, Leads: {imovel.leadsZap}</p>
        ))
      )}
    </div>
  )
}

export default App
