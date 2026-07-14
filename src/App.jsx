import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Products from './pages/Products'
import ProductsAsyncAwait from './pages/ProductsAsyncAwait'
import ProductsAxiosThen from './pages/ProductsAxiosThen'

const App = () => {
  return (
    <>
    <Routes>
      {/* Route components will go here */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/message" element={<Message/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products-async-await" element={<ProductsAsyncAwait/>} />
      <Route path="/products-axios-then" element={<ProductsAxiosThen/>} />
    </Routes>
    </>
  )
}

export default App