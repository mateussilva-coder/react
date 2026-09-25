import { useState } from 'react'
import "./FormAnuncioStyle.css"

const FormAnuncio = ({onAdicionarImovel}) => {

    const [titulo, setTitulo] = useState("")
    const [preco, setPreco] = useState(0)
    const [canal, setCanal] = useState("VivaReal")
    const [isDestaque, setIsDestaque] = useState(false)

    const handleTitulo = (e) => {
        setTitulo(e.target.value)
        console.log(titulo)
    }

    const handlePreco = (e) => {
        setPreco(e.target.value)
        console.log(preco)
    }

    const handleCanal = (e) => {
        setCanal(e.target.value)
    }

    const handleDestaque = (e) => {
        setIsDestaque(!isDestaque)
    }

  return (
    <form>
        <label htmlFor="titulo">Insira o titulo: </label>
        <input type="text" name="titulo" id="titulo" onChange={handleTitulo}/>

        <label htmlFor="preco">Insira o preco: </label>
        <input type="number" name='titulo' id='titulo' onChange={handlePreco}/>

        <label>
            <select onChange={handleCanal} value={canal}>
                <option value="vivareal">VivaReal</option>
                <option value="zap">zap</option>
            </select>
        </label>

        <label htmlFor="destaque">É destaque</label>
        <input type="checkbox" name="destaque" id="destaque" onChange={handleDestaque}/>

        <input type="submit" value="Enviar"/>
    </form>
  )
}

export default FormAnuncio