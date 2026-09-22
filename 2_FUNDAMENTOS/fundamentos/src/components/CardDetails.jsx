import React from 'react'

function CardDetails({brand, km, color}) {



  return (
    <div>
        <p>Marca - {brand},  Kilometragem {km}, cor - {color}</p>
    </div>
  )
}

export default CardDetails