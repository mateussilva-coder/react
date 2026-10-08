import {useState, useEffect, useRef} from 'react'

const HookUseRef = () => {
  const numberRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counterB, setCounterB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1
  })

  const inputRef = useRef()

  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() 

    setText("")

    inputRef.current.focus()
  }

  return (
    <div>
        <h2>UseRef</h2>
        <p>O comonente Renderizou: {numberRef.current}</p>
        <p>Contador A: {counter}</p>
        <button onClick={(e) => setCounter(counter + 1)}>Aumentar A</button>

        <p>Contador B: {counterB}</p>
        <button onClick={(e) => setCounterB(counterB + 1)}>Aumentar B</button>

        <form onSubmit={handleSubmit}>

        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>


        <input type="submit" value={"Enviar"} />
        </form>
    </div>
  )
}

export default HookUseRef