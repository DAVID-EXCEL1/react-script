import React, { useEffect, useState } from 'react'

const ProductsAsyncAwait = () => {
    // Store the API result in state
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        // This function uses async/await to make the API request
        const fetchProducts = async () => {
            try {
                // 1. Make the request
                const response = await fetch('https://fakestoreapi.com/products')

                // 2. Check whether the request was successful
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }

                // 3. Convert the response body to JSON
                const data = await response.json()

                // 4. Save the data in state
                setProducts(data)
            } catch (err) {
                // 5. If anything fails, save the error
                setError(err.message)
            } finally {
                // 6. Always stop the loading state
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Async / Await Fetch Example</h2>
            <p>
                This version uses <strong>async/await</strong> to make the request look more readable.
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

export default ProductsAsyncAwait
