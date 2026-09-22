import React, { useState } from 'react'

function ListRender() {

    const [list] = useState(["Mateus", "Lira", "Caua"])

    const [users, setUsers] = useState([
        {id: 1, name: "Mateus", age: 18},
        {id: 2, name: "Caua", age: 38},
        {id: 3, name: "Joao", age: 13},
        {id: 4, name: "Marley", age: 42},
    ])

    const deleteRamdon = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))

    }

  return (
    <div>
        <ul>
            {list.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map(user => (
                <li key={user.id}>O {user.name} tem {user.age} de idade</li>
            ))}
        </ul>
        <button onClick={deleteRamdon}>Deletar aleatório</button>
    </div>
  )
}

export default ListRender