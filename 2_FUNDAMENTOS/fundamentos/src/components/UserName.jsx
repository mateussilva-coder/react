import React from 'react'

const UserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é: {props.nome}</h2>
    </div>
  )
}

export default UserName