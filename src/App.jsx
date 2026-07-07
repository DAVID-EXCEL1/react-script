import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
    <Routes>
      {/* Route components will go here */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
    </>
  )
}

export default App