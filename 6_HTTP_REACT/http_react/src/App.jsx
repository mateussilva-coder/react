import { useState , useEffect} from 'react'
import './App.css'
import { useFetch } from './hooks/UseFetch'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  const {data: items} = useFetch(url)
  /*
  useEffect(() => {
    async function getData() {
      
      const res = await fetch(url)

      const data = await res.json()

      console.log(data)

      setProducts(data)
    }
    getData()
  },[])
  */

const [name, setName] = useState("")
const [price, setPrice] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault()

  const product ={
    name,
    price
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      contentType: "application/json"
    },
    body: JSON.stringify(product)
  })

  const addedProduct = await res.json()

  setProduct((prev) => [...prev, addedProduct])
}

  return (
    <>
      <h1>Http em react</h1>

      <ul>
      {items?.map(product => (
        <li key={product.id}> Nome: {product.name} - Preco: {product.price}</li>
      ))}
      </ul>

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          </label>
          <label>
            <span>Preco:</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
          </label>
          <input type="submit" value="enviar"></input>
        </form>
      </div>
    </>
  )
}

export default App
