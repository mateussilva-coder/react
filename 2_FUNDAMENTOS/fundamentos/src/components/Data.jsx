import React, { useState } from 'react'

const Data = () => {

    const [data, setData] = useState(20)

    const subtrair = () => setData(data > 0 ? data - 1: 0)

    const resetar = () => setData(20)

  return (
    <div>
        <p>Os dados sao: {data}</p>
        <button onClick={subtrair}>Subtrair</button>
        <button onClick={resetar}>Resetar</button>
    </div>
  )
}

export default Data