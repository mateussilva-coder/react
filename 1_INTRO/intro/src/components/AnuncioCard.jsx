import React from 'react'

const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function AnuncioCard({id, title, price, isSold, onFavoritar}) {

    const formattedPrice = precoFormatado.format(price)

  return (
    <div>
        <h3>{title}</h3>
        <p>Preco {formattedPrice}</p>
        {isSold && (<span>VENDIDO!</span>)}
        <button onClick={() => onFavoritar({id,title,price})}>FAVORITAR 💖</button>
    </div>
  )
}

export default AnuncioCard