import React from "react";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <Link to="/productlist">
      <div
        key={item.id}
        className="category-container h-full grow mx-1  cursor-pointer scale-[99%] hover:scale-[102%] transition-all duration-700 "
      >
        <div className="h-full category-img-container">
          <img className="object-cover w-full h-full" src={item.img} />
        </div>
        <div className="category-text-container  top-[80%] right-1/4 text-center  bg-[#1f2937b8]">
          <h3 className="hidden mt-1 font-bold text-white md:text-base whitespace-nowrap md:block xl:text-3xl lg:text-xl md:mt-2">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Category;
