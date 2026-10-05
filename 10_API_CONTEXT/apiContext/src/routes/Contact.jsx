import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../Components/ChangeCounter'

function Contact() {

    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
      <h1>Página de Contato</h1>
      <p>Entre em contato pelo e-mail: suporte@exemplo.com</p>

      <ChangeCounter/>

      <p>Contador: {counter}</p>  

    </div>
  )
}

export default Contact