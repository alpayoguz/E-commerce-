import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Filters from '../components/Filters'
import { useFilter } from '../contexts/FilterContext'

const ProductList = () => {
   const {filteredProducts, setFilteredProducts} = useFilter()
  return (
     <>
     <div>
        <Announcement/>
        <Navbar/>
        <Filters/>
        <Products productsData={filteredProducts}/>
        
        
     </div>
     

     </>
  )
}

export default ProductList