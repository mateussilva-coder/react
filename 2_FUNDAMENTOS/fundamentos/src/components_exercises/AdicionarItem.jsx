import React, { useState } from 'react'

const AdicionarItem = () => {

    const [list, setList] = useState(["Teclado", "Mouse"])
    const [novoItem, setNovoItem] = useState("")
    const [erro, setErro] = useState(false)

    const enviarItem = (item) => {

        if(item.trim() === ""){
            setErro(true)
        } else {
            setList((prev) => [...prev, item])
            setErro(false)
            setNovoItem("")
        }
    }

  return (
    <div>
        <label htmlFor="item">{erro ? 'Insira um nome valido': 'Insira o item'}</label>
        <input type="text" name="item" id="item" onChange={(e) => setNovoItem(e.target.value)} value={novoItem}/>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={() => enviarItem(novoItem)}>Enviar</button>
    </div>
  )
}

export default AdicionarItem