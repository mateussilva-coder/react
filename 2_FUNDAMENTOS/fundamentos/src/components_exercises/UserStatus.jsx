import React, { useState } from 'react'

function UserStatus() {

    const [isOnline, setIsOnline] = useState(false);

    const alternarStatus = () => setIsOnline((prev) => !prev)
  return (
    <div>

        <button onClick={alternarStatus}>{isOnline ? 'Ficar Ofline': 'Ficar Online'}</button>
        <h3 style={{color: isOnline ? 'green' : 'red'}}>{isOnline ? 'O usuario esta online' : 'O usuario esta ofline'}</h3>

        {isOnline && <button>Acessar Painel!</button>}

    </div>
  )
}

export default UserStatus