import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Populars from '../components/Populars'
import Filters from '../components/Filters'

const ProductList = () => {
  return (
     <>
     <div>
        <Announcement/>
        <Navbar/>
        <Filters/>
        <Populars/>
        
        
     </div>
     

     </>
  )
}

export default ProductList