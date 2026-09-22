import React, { useState } from 'react'

function NewEvent() {

    const [isLigado, setIsLigado] = useState(false);

    const interruptor = () => setIsLigado(!isLigado)

  return (
    <button onClick={interruptor}
    style={{backgroundColor: isLigado? 'green' : 'red',
        display: 'flex',
        borderRadius: '12px'
    }}>
        {isLigado ? "Ligado" : "Desligado"}
    </button>
  )
}

export default NewEvent