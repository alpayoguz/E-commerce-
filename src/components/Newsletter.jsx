import React, { useRef } from 'react'
import {AiOutlineSend} from "react-icons/ai"
import swal from 'sweetalert';

const Newsletter = () => {
  const inputVal = useRef();
  
  return (
    <div className='newsletter-container w-[85vw] h-[40vh] bg-[#fcf5f5] mx-auto rounded-md justify-center items-center flex-col flex my-[2rem] p-10 '>
        <h1 className='py-4 text-8xl font-md'>Newsletter</h1>
        <p className='py-4 text-2xl'>Get timely updates from your favorite products</p>
        <div className='newsletter-input-container flex items-center justify-center w-[70%] h-[35px] '>
            <input ref={inputVal} className='w-[70%] h-full  outline-none border-[2px] border-slate-500 placeholder:px-2  px-3 ' placeholder='Your Email' />
            <AiOutlineSend onClick={()=> {inputVal.current.value = "" ; swal("Thanks!", "Your email adress added", "success");}} className='w-[70px] h-full text-white  bg-blue-500 border-[1px] cursor-pointer hover:text-blue-500 hover:bg-white '/>
        </div> 

    </div>
  )
}

export default Newsletter