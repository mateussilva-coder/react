import React, { useState, useEffect } from 'react'
import styles from '../css/ProductForm.module.css'

const ProductForm = ({ postData, loading, editingProduct, onSetEditingProducts, updateData }) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [isNew, setIsNew] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {

        if (editingProduct) {
            setName(editingProduct.name)
            setPrice(editingProduct.price)
            setCategory(editingProduct.category)
            setIsNew(editingProduct.condition)
        } else {
            setName('')
            setPrice('')
            setCategory('')
            setIsNew(false)
        }

    }, [editingProduct])

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleIsNew = (e) => {
        setIsNew(e.target.checked)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !price || !category) {
            setError("Preencha todos os campos antes de enviar")
            return
        }
        setError('')

        const product = {
            name,
            price: Number(price),
            category,
            condition: isNew ? 'Novo' : 'Usado'
        }

        if (editingProduct) {
            await updateData(editingProduct.id, product)
            onSetEditingProducts(null)
        } else {

            await postData(product)

            setName('')
            setPrice('')
            setCategory('')
            setIsNew(false)
        }

    }

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>

            <h2>Cadastrar Produto</h2>

            <div className={styles.formControl}>
                <label htmlFor="name">Insira o nome do produto:</label>
                <input type="text" name="name" id="name" value={name} required onChange={handleName} className={styles.input} />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="price">Insira o preco:</label>
                <input type="number" name="price" id="price" value={price} required onChange={handlePrice} className={styles.input} />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="category">Selecione a categoria:</label>
                <select name="category" id="category" value={category} onChange={handleCategory} className={styles.input}>
                    <option value="">Selecione a categoria</option>
                    <option value="Periféricos">Periféricos</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Monitores">Monitores</option>
                    <option value="Acessórios">Acessórios</option>
                </select>
            </div>

            <div className={styles.checkboxGroup}>
                <label>
                    É novo:
                    <input type="checkbox" name="condition" id="condition" checked={isNew} onChange={handleIsNew} />
                </label>
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}
            <button type='submit' disabled={loading} className={styles.button}>
                {loading ? 'Enviando...' : editingProduct ? 'Atualizar' : 'Salvar'}
            </button>

        </form>
    )
}

export default ProductForm