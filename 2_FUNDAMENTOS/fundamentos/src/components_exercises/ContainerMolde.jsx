import React from 'react'

function ContainerMolde({children}) {
  return (
    <section style={{border: "1px solid blue", padding: "16px", borderRadius: "8px", margin: "18px"}}>
        {children}
    </section>
  )
}

export default ContainerMolde