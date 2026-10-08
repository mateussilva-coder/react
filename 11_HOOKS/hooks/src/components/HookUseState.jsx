import React from 'react'
import {useState} from 'react'

const HookUseState = () => {

    const [name, setName] = useState("");

  return (
    <div>
        <h3>Olá {name}!</h3>
        <label htmlFor="name">Insira seu nome: </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

        
    </div>
  )
}

export default HookUseState