import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/UseFetch'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useTitleColorContext } from '../hooks/UseTitleColorContext'

function Home() {
  const [products, setProducts] = useState([])

  const {counter, setCounter} = useContext(CounterContext)

  const {color, dispatch} = useTitleColorContext()
 
 const url = "http://localhost:3000/products"

  const{data: itens} = useFetch(url)

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

    return (
        <div>
            <h1 style={{color: color}}>Home</h1>
            <ul className="products">
                {itens && itens.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
            <p>Contador: {counter}</p>
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
}
export default Home