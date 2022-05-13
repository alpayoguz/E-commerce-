import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAlert } from './AlertContext';
import { useAuth } from './AuthContext';
import swal from 'sweetalert';

 const CartContext = createContext();
 export function useCart(){
    return useContext(CartContext)
}
export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])
    const [hiddenAnnouncement, setHiddenAnnouncement] = useState(true)

    const itemsPrice = cartItems?.reduce((a,c) => a + c.price * c.qty , 0)
    const  shippingPrice = itemsPrice > 100 ? 0 : 7.99 
    const cartLength = cartItems?.reduce((a, b) => a + b.qty, 0)

    const {currentUser} = useAuth();
   const {setIsAlert} = useAlert()


    function onAdd(product, event)
    {
        if(currentUser){
            const exist = cartItems.find(x  => x.id === product.id)
            if(exist){
                setCartItems(cartItems.map(x => x.id === exist.id ? {...exist, qty:exist.qty +1} : x))
                console.log(cartItems)

              
            }else{
                setCartItems(prevVal => [...prevVal, {...product, qty:1}] )
               
            }
        }else{
            swal("Oops!", "You have to log in first!", "info");
        }
       

    }
    function onRemove(product){
        const exist = cartItems.find(item => item.id === product.id)
        if(exist.qty === 1){
            setCartItems(cartItems.filter(item => item.id !== product.id))
            // if(localStorage.getItem("cartItems") !== undefined){
            //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
            // }else{
            //     localStorage.setItem("cartItems", [])
            // }
            
        }else{
            setCartItems(cartItems.map(item => item.id === exist.id ? {...exist, qty: exist.qty - 1} : item))
            // if(localStorage.getItem("cartItems")){
            //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
            // }else{
            //     localStorage.setItem("cartItems", [])
            // }
        }


        // setCartItems(cartItems.map(item => product.id === item.id ? {...item, qty:item.qty - 1} : item ))
        // if(product.qty  < 2 ){
        //     setCartItems(cartItems.filter(item => item.id !== product.id ))
        // }
    }

    function removeCompletely(product){
        setCartItems(cartItems.filter(item => item.id !== product.id))
        // if(localStorage.getItem("cartItems")){
        //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
        // }else{
        //     localStorage.setItem("cartItems", [])
        // }
    }

    const value = {
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        itemsPrice,
        shippingPrice,
        removeCompletely,
        cartLength,
        hiddenAnnouncement,
        setHiddenAnnouncement
    }
  return (
   <>
   <CartContext.Provider value={value}>
       {children}
   </CartContext.Provider>

   </>


  )
}

 