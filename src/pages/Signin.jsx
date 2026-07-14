import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signin = () => {
    // These state variables hold the email and password typed by the user
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // This is the data that will be sent to the backend for login
        const loginData = {
            email,
            password,
        }

        setLoading(true)
        setMessage('')

        // IMPORTANT:
        // If your backend uses a different sign-in route,
        // change '/signin' below to match your API.
        axios.post('http://localhost:3000/api/signin', loginData)
            .then((response) => {
                // The backend may return a user object or a message.
                const user = response.data.user || { email: email }

                // Save the signed-in user in browser storage so the dashboard can greet them later.
                localStorage.setItem('loggedInUser', JSON.stringify(user))

                setMessage(response.data.message || 'Sign in successful!')

                // After a successful sign-in, redirect the user to the dashboard.
                navigate('/dashboard', {
                    state: {
                        userName: user.firstName || user.name || user.email,
                    },
                })
            })
            .catch((error) => {
                setMessage(error.response?.data?.message || 'Sign in failed. Please check your details.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1>Signin</h1>
                <p>Enter your account details to access your dashboard.</p>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing in...' : 'Signin'}
                    </button>
                </form>

                <p>
                    New here? <Link to="/signup">Create an account</Link>
                </p>

                {message && <p>{message}</p>}
            </div>
        </>
    )
}

export default Signin
