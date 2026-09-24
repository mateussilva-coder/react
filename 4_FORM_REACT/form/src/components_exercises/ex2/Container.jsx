import React from 'react'

function Container({children}) {
  return (
    <div style={{width: "70%", minHeight:"600", border: "1px solid blue", margin: "0 auto", borderRadius: "8px", padding: "20px", marginTop: "20px"}}>
        {children}
    </div>
  )
}

export default Container