import React, { useContext, useState, useEffect } from 'react'
import { popularProducts } from '../constants/data'
import Popular from './Popular'
import { Link } from 'react-router-dom'
import { GenderContext } from '../contexts/GenderContext'


const Populars = () => {
  const [products, setProducts] = useState(popularProducts)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const {filterObject} = useContext(GenderContext)

  useEffect(()=>{

    setFilteredProducts(()=>{
      if(filterObject.type === "all" && filterObject.gender === "all"){
        return products
    }else{
      return  products.filter(item => Object.entries(filterObject).every(([key, value]) =>{
        console.log("item[key]", item[key].includes(value))
        return  item[key].includes(value) || value ==="all" || item[key] === "all"
      } ))
    }
    

      }
      
    )
  },[filterObject])

  return (
      <>
          <div className='products-container flex flex-col w-[90vw] h-[80vh] p-10 mx-auto'>
              <h1 className='text-3xl mb-4'>POPULARS</h1>
              <div className='flex flex-wrap'>
                {filteredProducts.length >0 ?  filteredProducts.map((item)=>{
                    return(
                        <>
                          <Popular item={item}/>   
                        </>
                    )
                }) : <p>No item found</p>}

              </div>
             

         </div>
        
      </>

  )
}

export default Populars