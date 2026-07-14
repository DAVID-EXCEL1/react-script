import React, { useEffect, useState } from 'react'

const Products = () => {
    // 1. Create state variables to store the data we fetch
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        // 2. Choose the API URL we want to call
        const apiUrl = 'https://fakestoreapi.com/products'

        // 3. Use fetch() to send a request to the API
        fetch(apiUrl)
            .then((response) => {
                // 4. Check if the request was successful
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }

                // 5. Convert the response to JSON
                return response.json()
            })
            .then((data) => {
                // 6. Save the data into state
                setProducts(data)
                setLoading(false)
            })
            .catch((err) => {
                // 7. If something goes wrong, save the error
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Fetch data from an API</h2>
            <p>
                This example shows how to request data from an API and then display it in a React component.
            </p>

            {/* Show a loading message while the data is being fetched */}
            {loading && <p>Loading products...</p>}

            {/* Show an error message if the request fails */}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {/* Render the returned data after the API call succeeds */}
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

export default Products