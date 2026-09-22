import React from 'react'

const formatador = 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function AnuncioItem({id, title, price, isSold}) {

    const formattedPrice = formatador.format(price)

  return (
    <div>
        <h3>{title}</h3>
        <p><strong>{formattedPrice}</strong></p>
        {isSold && (<span>VENDIDO</span>)}
    </div>
  )
}

export default AnuncioItem