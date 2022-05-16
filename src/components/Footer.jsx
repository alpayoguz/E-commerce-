import React from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container w-[50vw] h-[14vh] md:w-[70vw] md:h-[20vh] mx-auto rounded-md bg-[#f5fbfd] flex flex-col justify-center items-center box-shadows my-10">
      <h3 className="text-base font-semibold md:text-2xl">
        Follow Us On Social Media
      </h3>
      <div className="flex py-5 footer-social-icons">
        <a href="https://tr-tr.facebook.com">
          {
            <AiFillFacebook className="w-[25px] h-[25px] text-[#1877F2] mx-2 cursor-pointer hover:-translate-y-[2px]  duration-300 ease-out  md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] " />
          }
        </a>
        <a href="https://twitter.com/?lang=tr">
          {
            <AiFillTwitterCircle className="w-[25px] h-[25px] text-[#1D9BF0] mx-2 cursor-pointer hover:-translate-y-[2px]  duration-300 ease-out md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]" />
          }
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram className="w-[25px] h-[25px] text-[#B50C4E] mx-2 cursor-pointer hover:-translate-y-[2px]  duration-300 ease-out md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
