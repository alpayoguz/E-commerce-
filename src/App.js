import React from 'react'
import "./css/App.css"
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Announcement from './components/Announcement'


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='products/:id' element={<Product/>}/>
        </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App