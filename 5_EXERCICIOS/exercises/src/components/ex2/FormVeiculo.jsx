import React from 'react'
import { useState } from 'react'
import "./FormVeiculo.css"

const FormVeiculo = ({onAdicionarVeiculo}) => {

    const [modelo, setModelo] = useState("")
    const [preco, setPreco] = useState(0)
    const [categoria, setCategoria] = useState("SUV")

    const handleModelo = (e) => {
        setModelo(e.target.value)
        console.log(modelo)
    }

    const handlePreco = (e) => {
        setPreco(e.target.value)
        console.log(preco)
    }

    const handleCategoria = (e) => {
        setCategoria(e.target.value)
        console.log(categoria)
    }

    const handleSubmit = (e) =>{ 
        e.preventDefault()

        const newVeiculo = {
            id: Date.now(),
            modelo: modelo,
            preco: Number(preco),
            categoria: categoria,
            status: "Disponível"
        }
        onAdicionarVeiculo(newVeiculo)

        setModelo("")
        setPreco("")
        setCategoria("SUV")
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Preencha as características</h2>

        <label htmlFor="modelo">Insira o modelo: </label>
        <input type="text" name="modelo" id="modelo" value={modelo} onChange={handleModelo}/>

        <label htmlFor="preco">Insira o preco: </label>
        <input type="number" name="preco" id="preco" value={preco} onChange={handlePreco}/>

        <label htmlFor="categoria">Insira a categoria: </label>
        <select 
        name="categoria" 
        id="categoria" 
        value={categoria} 
        onChange={handleCategoria}
        >
        <option value="SUV">SUV</option>
        <option value="Sede">Sede</option>
        <option value="Hatch">Hatch</option>
</select>

        <input type="submit" name="enviar"/>
    </form>
  )
}

export default FormVeiculo