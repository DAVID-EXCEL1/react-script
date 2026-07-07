import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission logic here
        console.log("Form submitted:", firstName, lastName, email, password);
        // console.log(e.target.value)
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
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Signup</button>
                </form>
            </div>
        </>
    )
}

export default Signup