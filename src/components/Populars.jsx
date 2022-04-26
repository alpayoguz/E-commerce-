import React from 'react'
import { popularProducts } from '../constants/data'
import Popular from './Popular'

const Populars = () => {
  return (
      <>
          <div className='products-container flex flex-col w-[90vw] h-[80vh] p-10 mx-auto'>
              <h1 className='text-3xl mb-4'>POPULARS</h1>
              <div className='flex flex-wrap'>
                {popularProducts.map((item)=>{
                    return(
                        <>
                            <Popular item={item}/>
                        </>
                    )
                })}

              </div>
             

         </div>
      </>

  )
}

export default Populars