import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) =>{


    const initialObject = {
        gender:"all",
        type:"all",
        sort:"asc"
    }
   const [filterObject, setFilterObject] = useState(initialObject)
 


    const value = {
      filterObject,
      setFilterObject
    }
    return <FilterContext.Provider value={value}>{props.children}</FilterContext.Provider>
}