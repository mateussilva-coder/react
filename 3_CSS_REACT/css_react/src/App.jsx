import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/title'
import MyForm from './components/MyForm'

function App() {

  const isOnline = false;
  const redTitle = true;

  return (
    <div>
      <h1>CSS no react</h1>
      <MyComponent/>
      <p>Pegou neste component tambem</p>
      <p style={{color: "blue"}}>Este elemento tem estilos inline</p>

      <h3 style={{color: isOnline ? 'green' : 'red'}}>Online</h3>

      <h2 className={redTitle ? 'red-title':'title'}>Titulo dinamico</h2>

     <Title/>

     <hr />

     <h1>Form em React</h1>

     <MyForm/>
    </div>
  )
}

export default App
