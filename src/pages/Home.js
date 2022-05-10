import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import { useAuth } from '../contexts/AuthContext'
import { popularProducts } from '../constants/data'

const Home = () => {
  return (
      <>
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