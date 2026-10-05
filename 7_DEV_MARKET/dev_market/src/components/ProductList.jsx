import React from 'react'
import styles from '../css/ProductList.module.css'

const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);
};
const ProductList = ({ products, deleteData, loading, onEditingProduct}) => {

    if (loading) {
        return <p className={styles.loading}>Carregando produtos...</p>
    }

    if (!products || products.length === 0) {
        return <p className={styles.empty}>Não há produtos cadastrados</p>
    }

    const handleDelete = async (id) => {
        await deleteData(id)
    }

    const handleUpdate = (product) => {
        onEditingProduct(product)
    }

    return (
        <div className={styles.listContainer}>
            <h2 style={{textAlign: 'center'}}>Seus Produtos</h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <h3>Nome: {product.name}</h3>
                        <p>Preco: {formatarPreco(product.price)}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Condicao: {product.condition}</p>
                        <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn}>
                            Deletar
                        </button>
                        <button onClick={() => handleUpdate(product)} className={styles.updateBtn}>
                            Atualizar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList