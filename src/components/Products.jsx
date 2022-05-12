import React, { useContext, useState, useEffect } from 'react'
import { popularProducts } from '../constants/data'
import Product from './Product'
import { Link } from 'react-router-dom'
import { FilterContext, useFilter } from '../contexts/FilterContext'


const Products = ({productsData}) => {
  const [products, setProducts] = useState(popularProducts)
  const {filterObject} = useContext(FilterContext)
  const {filteredProducts, setFilteredProducts} = useFilter()

  useEffect(()=>{

    setFilteredProducts(()=>{
      if(filterObject.type === "all" && filterObject.gender === "all"){
        return products
    }else{
      return  products.filter(item => Object.entries(filterObject).every(([key, value]) =>{
        if(key === "gender" || key === "type"){
           return  item[key].includes(value) || value ==="all" || item[key] === "all"
        }else{
          return true
        }
        
      } ))
    }
    

      }
      
    )
  },[filterObject])


  useEffect(()=>{
    if(filterObject.sort === "asc"){
      setFilteredProducts(prevVal => {return  [...prevVal].sort((a,b)=> {return a.price - b.price })})
    }else if (filterObject.sort === "desc"){
      setFilteredProducts(prevVal => {return  [...prevVal].sort((a,b)=> {return b.price - a.price })})
    }
  }, [filterObject])

  return (
      <>
          <div className='products-container flex flex-col w-[90vw] h-[80vh] p-10 mx-auto'>
              <h1 className='text-3xl mb-4'>POPULARS</h1>
              <div className='flex flex-wrap'>
                {productsData.length > 0 ?  productsData.map((item)=>{
                    return(
                        
                          <Product key={item.id} item={item}/>   
                        
                    )
                }) : <p>No item found</p>}

              </div>
             

         </div>
        
      </>

  )
}

export default Products