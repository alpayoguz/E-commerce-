import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../contexts/CartContext";
import {BsFillBasketFill} from "react-icons/bs"
import { useAuth } from "../contexts/AuthContext";
import CartNoSignIn from "../components/CartNoSignIn";
import CartSignIn from "../components/CartSignIn";


const Cart = () => {
  const {currentUser} = useAuth();
  const  {cartItems, setCartItems} = useCart();

  useEffect(()=>{
    setCartItems(JSON.parse(localStorage.getItem("cartItems")))
  }, [])
  
  useEffect(()=>{
    if(cartItems?.length > 0){
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      
    }else{
      localStorage.setItem("cartItems", JSON.stringify([]))
    }
   
    
  },[cartItems])




  return (
    <>
    <Announcement/>
    <Navbar />
      { currentUser ? 
       <CartSignIn/> : 
       <CartNoSignIn/>}
      
    </>
  );
};

export default Cart;
