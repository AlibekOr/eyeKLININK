import React from 'react'
import Home from './components/Home'
import Cart from "./components/Cart"
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import "./index.css"
const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
