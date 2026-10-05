import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import styles from'./Home.module.css'
const formatarMoeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}
const Home = () => {

    const url = 'http://localhost:3000/products'

    const {data:products, loading, error} = useFetch(url)

    if(loading){
        return (<p>Carregando...</p>)
    }

    if(error){
        return (<p>{error}</p>)
    }

  return (
    <div className={styles.container}>
    {products.map(product => (
        <div key={product.id} className={styles.card}>
            <h3>{product.name}</h3>
            <p>{formatarMoeda(product.price)}</p>
            <p>{product.category}</p>
            <Link to={`/products/${product.id}`} className={styles.button}>Saber mais</Link>
            
        </div>
    ))}
    </div>
  )
}

export default Home