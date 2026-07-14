import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
    // Keep one piece of state for each form field
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    // For loading and response feedback
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Build the object that will be sent to the backend
        const userData = {
            firstName,
            lastName,
            email,
            phone,
            password,
        }

        setLoading(true)
        setMessage('')

        // Send a POST request to your backend API
        axios.post('http://localhost:3000/api/', userData)
            .then((response) => {
                // The backend answered successfully.
                // We show the message and then redirect the new user to sign in.
                setMessage(response.data.message || 'Signup successful!')

                // Clear the form after a successful submit
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhone('')
                setPassword('')

                // After signup succeeds, send the user to the signin page.
                navigate('/signin')
            })
            .catch((error) => {
                // Show a helpful error message from the backend if available
                setMessage(error.response?.data?.message || 'Signup failed. Please try again.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </form>

                {message && <p>{message}</p>}
            </div>
        </>
    )
}

export default Signup