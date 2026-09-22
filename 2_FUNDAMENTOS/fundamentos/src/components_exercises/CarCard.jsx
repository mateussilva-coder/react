import React from 'react'

const precoFormatado = (value) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
function CarCard({brand, km, color, price}) {

    const isZeroKm = km === 0

  return (
    <article>
        <h3>{brand}</h3>
        <strong>{precoFormatado(price)}</strong>
        <p>Color: {color}</p>
        <span>
            {isZeroKm ? 'ZERO KM!':`SEMINOVO • ${km.toLocaleString('pt-BR')}km`}
        </span>
    </article>
  )
}

export default CarCard