import React, { useState } from 'react'

export const HidePassword = () => {

    const [showPassword, setShowPassword] = useState(false)

    const hide = () => setShowPassword(!showPassword)

  return (
    <div>
        <label htmlFor="password">Insira sua senha</label>
        <input type={showPassword ? 'text' : 'password'} name="password" id="password" />
        <button onClick={hide}>
            {showPassword ? 'Esconder Senha' : 'Mostrar Senha'}
        </button>
    </div>
  )
}
