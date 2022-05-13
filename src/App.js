import React from 'react'
import "./css/App.css"
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'



function App() {
  return (
    <>
    
    <HashRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='products/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </HashRouter>
    
    
    </>
  )
}

export default App