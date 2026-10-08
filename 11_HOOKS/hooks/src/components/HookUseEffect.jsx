import React from 'react'
import { useEffect, useState } from 'react'

const HookUseEffect = () => {

    useEffect(() => {
        console.log("Estou sendo executado!")
    })

    const [number, setNumber] = useState(0)

    const changeNumber = () => {
        setNumber(number+5)
    }

    useEffect(() => {
        console.log("Isto vai rodar apenas uma vez")
    },[])


    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log("Hello World")
            setAnotherNumber(number + 1)
        },2000)

        return () => clearTimeout(timer)

    },[anotherNumber])

  return (
    <div>
        <h2>UseEffect</h2>
        <p>O numero é: {number}</p>
        <button onClick={changeNumber}>Incrementar 5 X</button>
    </div>
  )
}

export default HookUseEffect