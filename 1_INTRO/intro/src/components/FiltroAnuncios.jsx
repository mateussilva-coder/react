import React from 'react'

function FiltroAnuncios({termo, onMudarTermo}) {


  return (
    <div>
        <label htmlFor="termo">Pesquisa: </label>
        <input type="text" placeholder='Busca por titulo...' id='termo' value={termo} onChange={(e) => onMudarTermo(e.target.value)}/>
    </div>
  )
}

export default FiltroAnuncios