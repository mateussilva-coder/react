import React from 'react'

function Container({children}) {
  return (
    <article style={{margin: "20px",border:"1px solid blue", padding: "16px"}}>
        {children}
    </article>
  )
}

export default Container