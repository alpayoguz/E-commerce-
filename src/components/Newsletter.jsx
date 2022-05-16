import React, { useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import swal from "sweetalert";

const Newsletter = () => {
  const inputVal = useRef();

  return (
    <div className="newsletter-container w-[65vw] h-[17vh] bg-[#fcf5f5] mx-auto rounded-md justify-center items-center flex-col flex my-[1rem] p-2 sm:w-[75rem] sm:h-[15rem] md:w-[80rem] md:h-[20rem] container box-shadows">
      <h1 className="py-[0.5rem] text-[1rem] font-md md:text-[2rem] lg:text-[3rem] ">
        Newsletter
      </h1>
      <p className="py-4 text-[0.8rem] md:text-[1.5rem] lg:text-[1.5rem]">
        Get timely updates from your favorite products
      </p>
      <div className="newsletter-input-container flex items-center justify-center w-[70%] h-[35px] ">
        <input
          ref={inputVal}
          className="w-[70%] h-[80%]  outline-none border-[2px] border-slate-500 placeholder:px-2 px-3  md:h-full "
          placeholder="Your Email"
        />
        <AiOutlineSend
          onClick={() => {
            inputVal.current.value = "";
            swal("Thanks!", "Your email adress added", "success");
          }}
          className="w-[6%] h-[80%] text-white  bg-blue-500 border-[1px] cursor-pointer hover:text-blue-500 hover:bg-white duration-300 ease-in-out  md:h-full"
        />
      </div>
    </div>
  );
};

export default Newsletter;
