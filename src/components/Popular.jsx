import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {BsSearch , BsCart2} from "react-icons/bs"
import { useState } from 'react'


const Popular = ({item}) => {
   const [iconOpacity, setIconOpacity] = useState(false)
  return (
    <div onMouseLeave={()=>{setIconOpacity(false)}} onMouseEnter={()=>{setIconOpacity(true)}} className='product-container relative w-[400px] h-[350px] p-3 m-1 bg-[#f5fbfd] cursor-pointer  hover:opacity-75'>
        <div className='product-img-container h-full w-full'>
            <img className='w-full h-[80%] object-contain' src={item.img} />
        </div>
        <div className= {`product-icons flex absolute top-0 left-0 justify-center items-center  w-full h-full opacity-0 ${iconOpacity && "opacity-[100%]"}`}>
          <AiOutlineHeart className='w-[50px] h-[50px] mx-2 cursor-pointer p-2  hover:bg-white rounded-[50%]'/>
          <BsSearch  className='w-[50px] h-[50px] mx-2 cursor-pointer p-2 hover:bg-white rounded-[50%]' />
          <BsCart2  className='w-[50px] h-[50px] mx-2 cursor-pointer p-2 hover:bg-white rounded-[50%]'/>
        </div>
        

    </div>
  )
}

export default Popular