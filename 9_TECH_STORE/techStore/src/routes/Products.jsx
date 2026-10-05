import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import styles from './Products.module.css'
const formatarMoeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

const Products = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/products/"+id
    const {data: product, loading, error} = useFetch(url)

    if(error){
        return <p>Erro: {error}</p>
    }

    if(loading){
        return <p>Carregando...</p>
    }

  return (

    <div className={styles.container}>
        <Link to="/" aria-label="Voltar para a home" className={styles.backButton}> ← </Link>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.priceTag}><strong>Preco: {formatarMoeda(product.price)}</strong></p>
        <p className={styles.category}>Categoria: {product.category}</p>
        <p className={styles.description}>Descricao: {product.description}</p>
        <p className={styles.stockBadge}>Estoque: {product.stock}</p>
        {product.specs && (
        <div className={styles.specsCard}>
            <h2 className={styles.specsTitle}>Especificações:</h2>
            <p className={styles.specItem}>Marca: {product.specs.brand}</p>
            <p className={styles.specItem}>Garantia: {product.specs.warranty}</p>
            {product.specs.resolution && (
                <p className={styles.specItem}>Resolucao: {product.specs.resolution}</p>
            )}
            {product.specs.weight && (
                <p className={styles.specItem}>Peso: {product.specs.weight}</p>
            )}
            <p className={styles.specItem}>Conectividade: {product.specs.connectivity}</p>
        </div>
        )}  
    </div>
  )
}

export default Products