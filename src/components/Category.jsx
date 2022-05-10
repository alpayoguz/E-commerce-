import React from "react";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <Link to="/productlist">
      <div
        key={item.id}
        className="category-container h-full grow mx-1 relative cursor-pointer scale-[99%] hover:scale-[102%] transition-all duration-700 "
      >
        <div className="category-img-container h-full">
          <img className="h-full w-full object-cover" src={item.img} />
        </div>
        <div className="category-text-container absolute top-[80%] right-1/4">
          <h3 className="text-4xl text-gray-800 whitespace-nowrap font-bold">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Category;
