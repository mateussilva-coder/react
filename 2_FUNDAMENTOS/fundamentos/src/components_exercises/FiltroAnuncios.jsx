import React from 'react'

function FiltroAnuncios({termo, onMudarTermo}) {

  return (
    <div>
        <label htmlFor="termo">Insira o termo de busca: </label>
        <input type="text" placeholder='Buscar anuncio por titulo' id='termo' value={termo} onChange={(e) => onMudarTermo(e.target.value)}/>
    </div>
  )
}

export default FiltroAnuncios