import React, { useContext, useState } from 'react'
import { GenderContext, GenderProvider } from '../contexts/GenderContext'

const Filters = () => {

    
    const {
        filterObject, 
        setFilterObject
    }
     = useContext(GenderContext)

    function handleSelection(event){

        const value = event.target.value
        setFilterObject(prevVal => {
        return {...prevVal, [event.target.name] : value }
         })
    }

    




  return (
      <>
       <div className='filter-container flex flex-col h-[10vh] w-[88vw] mx-auto  '>
             
                <div className="filter-inner flex justify-between ">
                    <div className='filter-inner-left flex items-center  '>
                        <h5 className='text-xl font-medium'>Filter Products : </h5>
                        <div className='filter-gender'>
                                <label htmlFor='gender'></label>
                                <select className='px-3 mx-2 py-2 border-2 outline-none cursor-pointer' value={filterObject.gender}  name='gender' id='gender' onChange={handleSelection} >
                                    <option value="all" >All</option>
                                    <option value="m">Man</option>
                                    <option value="w">Woman</option>
                                   
                                </select>
                        </div>
                        <div className='filter-type'>
                                <label htmlFor='type'></label>
                                <select className='px-3 mx-2 py-2 border-2 outline-none cursor-pointer' value={filterObject.type} name='type' id='typw' onChange={handleSelection}>
                                    <option value="all" >All</option>
                                    <option value="tshirt">T-Shirt</option>
                                    <option value="jacket">Jacket</option>
                                    <option value="dress">Dress</option>
                                </select>
                        </div>
                    </div>
                    <div className='filter-inner-right flex items-center '>
                        <h5 className='text-xl font-medium'>Price : </h5>
                        <label htmlFor='sort'></label>
                        <select className='px-3 py-2 border-2 mx-2 outline-none cursor-pointer' value={filterObject.price} name='sort' id='sort' onChange={handleSelection}>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                    </div>
                </div>
        </div>
        

      

      </>
  )
}

export default Filters