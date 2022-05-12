import React from 'react'
import { categories } from '../constants/data'
import Category from './Category'



const Categories = () => {
  return (
    <div className='categories-container flex justify-center w-[90vw] h-[80vh] mx-auto p-10 '>
        {categories.map((item)=>{
            return(
                 <Category key={item.id} item={item}/>
            )
        })}
    </div>
  )
}

export default Categories