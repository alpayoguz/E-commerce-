import React from 'react'
import {AiFillFacebook, AiFillTwitterCircle} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer-container w-[25vw] h-[10vh] mx-auto rounded-md bg-[#f5fbfd] flex flex-col justify-center items-center'>
        <h3 className='text-3xl italic'>Follow Us On Social Media</h3>
        <div className='flex py-5 footer-social-icons'>
            <a href="https://tr-tr.facebook.com">{<AiFillFacebook className='w-[40px] h-[40px] text-[#1877F2] mx-2 cursor-pointer hover:-translate-y-[2px]  duration-300 ease-out '/>}</a>
           <a href="https://twitter.com/?lang=tr">{<AiFillTwitterCircle className='w-[40px] h-[40px] text-[#1D9BF0] mx-2 cursor-pointer hover:-translate-y-[2px]  duration-300 ease-out'/>}</a> 
           <a href='https://www.instagram.com/'><BsInstagram className='w-[40px] h-[40px] text-[#B50C4E] mx-2 cursor-pointer hover:-translate-y-[2px]  duration-300 ease-out'/></a> 
        </div>


    </div>
  )
}

export default Footer