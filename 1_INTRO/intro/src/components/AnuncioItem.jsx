import React from 'react'

function AnuncioItem({onFavoritar}) {


  return (
    <div>
        <button onClick={() => onFavoritar({title, price})}>💖 Salvar</button>
    </div>
  )
}

export default AnuncioItem