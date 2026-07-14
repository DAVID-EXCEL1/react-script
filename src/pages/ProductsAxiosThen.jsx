import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductsAxiosThen = () => {
    // State for storing the fetched data
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        // axios.get() sends the request to the API
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                // The API data is inside response.data
                setProducts(response.data)
                setLoading(false)
            })
            .catch((err) => {
                // If the request fails, we store the error
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Axios with .then() Example</h2>
            <p>
                This version uses <strong>axios</strong> and the <strong>.then()</strong> pattern.
            </p>

            {loading && <p>Loading products...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            <ul>
                {products.slice(0, 5).map((product) => (
                    <li key={product.id} style={{ marginBottom: '1rem' }}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsAxiosThen
