import { createContext, useContext, useState } from "react";
import { popularProducts } from '../constants/data'


export const FilterContext = createContext();
export function useFilter(){
  return useContext(FilterContext)
}

export const FilterProvider = (props) =>{
  const [filteredProducts, setFilteredProducts] = useState(popularProducts)



    const initialObject = {
        gender:"all",
        type:"all",
        sort:"asc"
    }
   const [filterObject, setFilterObject] = useState(initialObject)
 


    const value = {
      filteredProducts,
      setFilteredProducts,
      filterObject,
      setFilterObject
    }
    return <FilterContext.Provider value={value}>{props.children}</FilterContext.Provider>
}