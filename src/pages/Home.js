import React, { useEffect } from 'react'
import Alert from '../components/Alert'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import { popularProducts } from '../constants/data'
import { useAlert } from '../contexts/AlertContext'
import { useCart } from '../contexts/CartContext'

const Home = () => {

  const {isAlert} = useAlert()
  const  {cartItems, setCartItems} = useCart()

  useEffect(()=>{
    setCartItems(JSON.parse(localStorage.getItem("cartItems")))
  }, [])
  useEffect(()=>{
    if(localStorage.getItem("cartItems") !== null && cartItems > 0){
      
    }else{
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }
   
    
  },[cartItems])
  return (
      <>
         {isAlert && <Alert/>}
         <Announcement/>
         <Navbar/>
         <Slider/>
         <Categories/>
         <Products productsData={popularProducts}/>
         <Newsletter/>
        <Footer/>
      </>
     
  )
}

export default Home