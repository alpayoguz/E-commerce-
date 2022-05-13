import React, {useEffect} from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Filters from '../components/Filters'
import { useFilter } from '../contexts/FilterContext'
import { useCart } from '../contexts/CartContext'

const ProductList = () => {
   const {filteredProducts, setFilteredProducts} = useFilter()
     const {cartItems, setCartItems} = useCart()


   useEffect(()=>{
      if(cartItems?.length > 0){
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        
      }else{
        localStorage.setItem("cartItems", JSON.stringify([]))
      }
     
      
    },[cartItems])
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