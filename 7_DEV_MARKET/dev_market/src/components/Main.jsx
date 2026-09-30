import { useState } from 'react'
import { useFetch } from '../hooks/UseFetch'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

const Main = () => {

    const {data: products, loading, postData: post, deleteData, updateData} = useFetch('http://localhost:3000/products')
    const [editingProduct, setEditingProduct] = useState(null)

  return (
    <main>

        <ProductForm postData={post} loading={loading} editingProduct={editingProduct} updateData={updateData} onSetEditingProducts={setEditingProduct}/>
        <ProductList products={products} deleteData={deleteData} loading={loading} onEditingProduct={setEditingProduct}/>

    </main>
  )
}

export default Main