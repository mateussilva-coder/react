import  "./App.css"
import Events from "./components/Events"
import FirstComponent from "./components/firstComponent"
import MyComponent from "./components/MyComponent"
import NewEvent from "./components/NewEvent"
import TemplateExpression from "./components/TemplateExpression"
import ListRender from "./components/ListRender"
//2 Importando componentes
import img2 from './assets/img2.png'
import Data from "./components/Data"
import { HidePassword } from "../../../components_exercises/HidePassword"
import InputChallenge from "../../../components_exercises/InputChallenge"
import UserStatus from "../../../components_exercises/UserStatus"
import ListaTarefas from "../../../components_exercises/ListaTarefas"
import UserName from "./components/UserName"; 
import AdicionarItem from "../../../components_exercises/AdicionarItem"
import CardDetails from "./components/CardDetails"
import CarCard from "../../../components_exercises/CarCard"
import { useState } from "react"
import Message from "./components/Message"
import ChangeMessage from "./components/ChangeMessage"
import ContainerMolde from "../../../components_exercises/ContainerMolde"
import AnuncioItem from "../../../components_exercises/AnuncioItem"
import FiltroAnuncios from "../../../components_exercises/FiltroAnuncios"

function App() {

const cars = [
  { id: 1, brand: "Volkswagen", km: 45000, color: "Preto" },
  { id: 2, brand: "Chevrolet", km: 0, color: "Branco" },
  { id: 3, brand: "Toyota", km: 82000, color: "Prata" },
  { id: 4, brand: "Honda", km: 120000, color: "Cinza" }
];

const [message, setMessage] = useState("")
const handleMessage = (msg) => {
    setMessage(msg)
}

const anuncios = [
  { id: 101, title: "Fiat Uno 2012", price: 22000, isSold: false },
  { id: 102, title: "Gol Square 1994", price: 15000, isSold: true },
  { id: 103, title: "Civic G10 2020", price: 110000, isSold: false }
];

const anunciosIniciais = [
  { id: 1, title: "Volkswagen Gol 1.0", price: 28000, isSold: false },
  { id: 2, title: "Chevrolet Onix LT", price: 52000, isSold: true },
  { id: 3, title: "Toyota Corolla XEi", price: 95000, isSold: false },
  { id: 4, title: "Honda Civic Touring", price: 125000, isSold: false },
  { id: 5, title: "Fiat Palio Fire", price: 18000, isSold: true }
];

const [termoBusca, setTermoBusca] = useState("")
const anunciosFiltrados = anunciosIniciais.filter((item) =>
    item.title.toLowerCase().includes(termoBusca.toLowerCase().trim()))

  //3 Comentários
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      {/*3 Comentarios */}
      <h1>Fundamentos</h1>

      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <NewEvent/>

      <hr />
      <img src="/img1.png" alt="Passaro"/>
      <hr />
      <img src={img2} alt="899j9" />
      <Data/>
      <hr />
      <HidePassword/>
      <hr />
      <InputChallenge/>
      <hr />
      <ListRender/>
      <hr />
      <UserStatus/>
      <hr />
      <ListaTarefas/>
      <hr />
      <UserName nome="Mateus"/>
      <hr />
      <AdicionarItem/>

      <CardDetails brand="BMW" km={1300} color="Branco"/>
      <CardDetails brand="Corsa" km={1300} color="Branco"/>
      <CardDetails brand="BMW" km={1300} color="Branco"/>

      {cars.map((carro) => (
        <CardDetails key={carro.id} brand={carro.brand} color={carro.color}/>
      ))}
      <hr />
      <CarCard brand={"Chefrolet"} price={12000} color={"Preto"} km={0}/>
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      <ContainerMolde>
        <button>botao</button>
      </ContainerMolde>
      <AnuncioItem />
      {anuncios.map(item => (
        <ContainerMolde key={item.id}>
          <AnuncioItem {...item}/>
        </ContainerMolde>
      ))}
      <FiltroAnuncios termo={termoBusca} onMudarTermo={setTermoBusca}/>
      
      {anunciosFiltrados.length > 0 ? (
        anunciosFiltrados.map((item) => (
          <ContainerMolde key={item.id}>
            <AnuncioItem {...item}/>
          </ContainerMolde>
        ))
      ) : (
        <p>Não há itens encontrados nesse termo</p>
      )}

    </div>
  )
}

export default App
