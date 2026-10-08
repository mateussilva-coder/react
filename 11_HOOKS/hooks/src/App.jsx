import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Link, NavLink, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul style={{listStyleType: "none"}}>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/contact"}>Contatos</NavLink></li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default App
