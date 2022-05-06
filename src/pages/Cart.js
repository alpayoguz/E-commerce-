import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import {AiOutlineDelete} from "react-icons/ai"

const Cart = () => {


  return (
    <>
    <Announcement/>
    <Navbar/>
    <div className='cart-container px-5 py-10 w-[75%] mx-auto flex items-center'>
        <div className='cart-left'>
        <h4 className='car-header text-3xl py-3 my-5  '>
            Basket (5 products)
        </h4>
        <div className='cart-products flex flex-col border-2 '>
            <div className='single-product flex  items-center justify-between border '>
                <div className='img-container w-[15%] border-r-2'>
                    <img src="Images/populars/women-dress-2.jpg" />
                </div>
                <div className='product-desc flex grow justify-around  mx-5  '>
                    <p className='text-xl'>Product Name</p>
                    <span>Quantity</span>
                    <span>Price</span>
                    <button>
                     <AiOutlineDelete/>
                    </button>
                </div>
            </div>
        </div>
        </div>
        <div className='cart-right whitespace-nowrap mx-5 border p-[3rem] grow '>
            <p className='text-2xl'>Order Summary</p>
            <ul className='flex justify-between text-[15px] py-5'>
              <li>Subtotal</li>
              <li>50$</li>
            </ul>

            <ul className='flex justify-between text-[15px] py-5'>
                <li>Shipping Price</li>
                <li>7.99$</li>
            </ul>
            <hr></hr>
            <ul className='flex justify-between text-[15px] py-5'>
                <li className='font-bold'>Total</li>
                <li className='font-bold'>60$</li>
            </ul>
        </div>

    </div>

    </>
  )
}

export default Cart