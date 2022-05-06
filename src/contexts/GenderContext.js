import { createContext, useState } from "react";

export const GenderContext = createContext();

export const GenderProvider = (props) =>{


    const initialObject = {
        gender:"all",
        type:"all"
    }
   const [filterObject, setFilterObject] = useState(initialObject)
 


    const value = {
      filterObject,
      setFilterObject
    }
    return <GenderContext.Provider value={value}>{props.children}</GenderContext.Provider>
}