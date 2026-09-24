import React from 'react'

function UserProfile({name, role, isActive, children}) {
  return (
    <div style={{border: isActive ? '1px solid green':'1px solid red', height: "400px", width: "400px",borderRadius:"8px", margin: "0 auto", textAlign: "center"}}>
        <h3>{name}</h3>
        <p>{role}</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default UserProfile