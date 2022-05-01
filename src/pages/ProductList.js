import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Populars from '../components/Populars'

const ProductList = () => {
  return (
     <>
     <div>
        <Announcement/>
        <Navbar/>
        <div className='filter-container flex flex-col h-[10vh] w-[88vw] mx-auto  '>
                <h3 className='text-3xl font-medium mb-2'>Dresses</h3>
                <div class="filter-inner flex justify-between ">
                    <div className='filter-inner-left flex items-center  '>
                        <h5 className='text-xl font-medium'>Filter Products : </h5>
                        <div className='filter-color'>
                                <label htmlFor='color'></label>
                                <select className='px-3 mx-2 py-2 border-2 outline-none cursor-pointer' name='colors' id='color'>
                                    <option value="color">Color</option>
                                    <option value="white">White</option>
                                    <option value="red">Red</option>
                                    <option value="black">Black</option>
                                    <option value="blue">Blue</option>
                                </select>
                        </div>
                        <div className='filter-size'>
                            <label htmlFor='size'></label>
                            <select className='px-3 py-2 border-2 outline-none cursor-pointer' name='size' id='size'>
                                <option value="">Size</option>
                                <option value="xs">XS</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='filter-inner-right flex items-center '>
                        <h5 className='text-xl font-medium'>Sort Products : </h5>
                        <label htmlFor='sort'></label>
                        <select className='px-3 py-2 border-2 mx-2 outline-none cursor-pointer' name='sort' id='sort'>
                            <option value="newest">Newest</option>
                            <option value="cheapest">Cheapest</option>
                        </select>
                    </div>
                </div>
        </div>
        <Populars/>
        
        
     </div>
     

     </>
  )
}

export default ProductList