import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
    <Routes>
      {/* Route components will go here */}
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </>
  )
}

export default App