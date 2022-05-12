import React from 'react'
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

const Home = () => {

  const {isAlert} = useAlert()
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