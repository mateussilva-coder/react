import React from 'react'

function Header({total}) {
  return (
    <div style={{borderBottom: "1px solid black",margin:"100px",display:"flex",justifyContent: "space-between"}}>
        <h1>OLX</h1>
        <h3>Carrinho: {total}</h3>
    </div>
  )
}

export default Header