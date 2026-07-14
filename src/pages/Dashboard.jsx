import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Dashboard = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // Read the saved user from localStorage.
    // If the user navigated here from the sign-in page,
    // we can also use the state passed through navigation.
    const storedUser = localStorage.getItem('loggedInUser')
    const userData = storedUser ? JSON.parse(storedUser) : {}
    const userName = location.state?.userName || userData.firstName || userData.name || userData.email || 'Student'

    const handleLogout = () => {
        // Remove the saved user to end the session.
        localStorage.removeItem('loggedInUser')

        // Redirect back to the sign-in page.
        navigate('/signin')
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1>Welcome, {userName}!</h1>
                <p>You have successfully signed in to your dashboard.</p>

                <div style={{ marginTop: '1rem' }}>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Dashboard
