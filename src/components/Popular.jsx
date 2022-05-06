import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Popular = ({ item }) => {
  const [iconOpacity, setIconOpacity] = useState(false);
  const path = `/products/${item.id}`;

  return (
    <Link to={path}>
      <div
        onMouseLeave={() => {
          setIconOpacity(false);
        }}
        onMouseEnter={() => {
          setIconOpacity(true);
        }}
        className="product-container relative w-[400px] h-[350px] flex flex-col justify-center p-3 m-1 bg-[#f5fbfd] cursor-pointer  hover:opacity-75"
      >
        <div className="product-img-container h-[60%] w-full">
          <img className="w-full h-[100%] object-contain" src={item.img} />
        </div>
        <div className="product-desc flex justify-around px-3 py-6">
          <p className="text-xl">{item.productName}</p>
          <p className="text-xl">${item.price}</p>
        </div>
        <div
          className={`product-icons flex absolute top-0 left-0 justify-center items-center  w-full h-full opacity-0 ${
            iconOpacity && "opacity-[100%]"
          }`}
        >
          <AiOutlineHeart className="w-[50px] h-[50px] mx-2 cursor-pointer p-2  hover:bg-white rounded-[50%]" />
          <BsSearch className="w-[50px] h-[50px] mx-2 cursor-pointer p-2 hover:bg-white rounded-[50%]" />
          <BsCart2 className="w-[50px] h-[50px] mx-2 cursor-pointer p-2 hover:bg-white rounded-[50%]" />
        </div>
      </div>
    </Link>
  );
};

export default Popular;
