import { useState } from "react"

const InputChallenge = () => {

    const [nome, setNome] = useState('')

    const preencherNome = (e) =>{
         const valor = e.target.value
         setNome(valor)
    }

  return (
    <div>
        <label htmlFor="nome">Insira seu nome:</label>
        <input type="text" placeholder="Insira aqui..." onChange={preencherNome}/>
        <h3>Seja Bem-Vindo {nome}</h3>
    </div>
  )
}

export default InputChallenge