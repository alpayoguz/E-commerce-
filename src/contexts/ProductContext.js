import React, { createContext } from 'react'
import { popularProducts } from '../constants/data';

export const ProductContext = createContext();


export const  ProductProvider = (props) => {

    

    const value = {
        popularProducts
    }


    return(
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    )
}