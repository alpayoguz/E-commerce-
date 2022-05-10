import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext();
export function useCart(){
    return useContext(CartContext)
}


export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty , 0)
    const  shippingPrice = itemsPrice > 100 ? 0 : 7.99 
    const cartLength = cartItems.reduce((a, b) => a + b.qty, 0)

    function onAdd(product, event)
    {
        const exist = cartItems.find(x  => x.id === product.id)
        if(exist){
            setCartItems(cartItems.map(x => x.id === exist.id ? {...exist, qty:exist.qty +1} : x))
        }else{
            setCartItems(prevVal => [...prevVal, {...product, qty:1}] )
        }

    }
    function onRemove(product){
        const exist = cartItems.find(item => item.id === product.id)
        if(exist.qty === 1){
            setCartItems(cartItems.filter(item => item.id !== product.id))
        }else{
            setCartItems(cartItems.map(item => item.id === exist.id ? {...exist, qty: exist.qty - 1} : item))
        }


        // setCartItems(cartItems.map(item => product.id === item.id ? {...item, qty:item.qty - 1} : item ))
        // if(product.qty  < 2 ){
        //     setCartItems(cartItems.filter(item => item.id !== product.id ))
        // }
    }

    function removeCompletely(product){
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }




    console.log(cartItems)


    const value = {
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        itemsPrice,
        shippingPrice,
        removeCompletely,
        cartLength
    }
  return (
   <>
   <CartContext.Provider value={value}>
       {children}
   </CartContext.Provider>

   </>


  )
}

 