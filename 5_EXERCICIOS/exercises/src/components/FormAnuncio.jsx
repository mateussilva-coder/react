import { useState } from 'react'
import "./FormAnuncioStyle.css"

const FormAnuncio = ({onAdicionarImovel}) => {

    const [titulo, setTitulo] = useState("")
    const [preco, setPreco] = useState(0)
    const [canal, setCanal] = useState("VivaReal")
    const [isDestaque, setIsDestaque] = useState(false)

    const handleTitulo = (e) => {
        setTitulo(e.target.value)
        
    }

    const handlePreco = (e) => {
        setPreco(e.target.value)
        
    }

    const handleCanal = (e) => {
        setCanal(e.target.value)
    }

    const handleDestaque = (e) => {
        setIsDestaque(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAnuncio = {
            id: Date.now(),
            titulo: titulo,
            preco: preco,
            canal: canal,
            isDestaque: isDestaque,
            leadsZap: 0
        }

        onAdicionarImovel(newAnuncio)

        setTitulo("")
        setPreco(0)
        setCanal("VivaReal")
        setIsDestaque(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Insira o titulo: </label>
        <input type="text" name="titulo" id="titulo" value={titulo} onChange={handleTitulo}/>

        <label htmlFor="preco">Insira o preco: </label>
        <input type="number" name='preco' id='preco' value={preco} onChange={handlePreco}/>

        <label htmlFor='canal'>Canal: </label>
            <select onChange={handleCanal} value={canal} id='canal'>
                <option value="VivaReal">VivaReal</option>
                <option value="Zap">Zap</option>
            </select>
        

        <label htmlFor="destaque">É destaque</label>
        <input type="checkbox" name="destaque" id="destaque" checked={isDestaque} onChange={handleDestaque}/>

        <input type="submit" value="Enviar"/>
    </form>
  )
}

export default FormAnuncio