import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import FiltroAnuncios from './components/FiltroAnuncios'
import AnuncioCard from './components/AnuncioCard'

function App() {
  
  const [termo, setTermo] = useState("")
  const [favoritos, setFavoritos] = useState([])
  const totalFavoritos = favoritos.length;

  const addItem = (item) => setFavoritos((prev) => [...prev, item])

  const listaInicial = [
  { id: 1, title: "Fiat Uno Mille 2010", price: 18000, isSold: false },
  { id: 2, title: "Honda Civic G10 2019", price: 105000, isSold: false },
  { id: 3, title: "VW Gol Quadrado 1994", price: 14000, isSold: true },
  { id: 4, title: "Toyota Corolla XEi 2021", price: 118000, isSold: false }
];

const listaFiltrada = listaInicial.filter(item => item.title.toLowerCase().trim().includes(termo.toLocaleLowerCase().trim()))

  return (
    <div className='app'>

      <Header total={totalFavoritos}/>

      <FiltroAnuncios termo={termo} onMudarTermo={setTermo}/>

      {listaFiltrada.length > 0 ? (
        listaFiltrada.map((item) => (
          <Container key={item.id}>
            <AnuncioCard {...item} onFavoritar={addItem} />
          </Container>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Nenhum anúncio encontrado para "{termo}".
        </p>
      )}

      {console.log(favoritos)}

    </div>
  )
}

export default App
