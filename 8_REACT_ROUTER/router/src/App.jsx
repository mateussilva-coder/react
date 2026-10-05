import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <>
    <Navbar/>
    <SearchForm/>
    <Outlet/>
    <p>RODAPE</p>
    </>
  )
}

export default App
