import React from "react";
import { categories } from "../constants/data";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="categories-container flex justify-center w-[100vw] h-[80vh] mx-auto px-5 py-3 my-5  ">
      {categories.map((item) => {
        return <Category key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Categories;
