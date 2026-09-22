import React from 'react'

const Events = () => {

  const alerta = () => alert("Vocë apertou o botao")

  return (
    <button onClick = {alerta}>Clique aqui</button>
  )
}

export default Events