import React, { useEffect, useState } from 'react'

const Message = () => {
    const [message, setMessage] = useState('')
    useEffect(() => {
        fetch('http://localhost:3000/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(err=> console.error('Error fetching message:', err))
    }, [])

    return (
        <>
            <h1>Message from the server:</h1>
            <p>{message}</p>
        </>
    )
}

export default Message