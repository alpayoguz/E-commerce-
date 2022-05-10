import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { BsCart2 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { useParams } from "react-router";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useCart } from "../contexts/CartContext";

const Product = () => {
  const { id } = useParams();
  const { popularProducts } = useContext(ProductContext);
  const product = popularProducts.find((product) => product.id === id);
  const { onAdd } = useCart();
  return (
    <>
      <div className="flex flex-col h-[60vh] justify-between">
        <Navbar />
        <div className="flex justify-center  product    w-[40vw] h-[40vh] mx-auto bg-[#f8fcfe] rounded-md   ">
          <div className="product__left h-[80%] py-5 ">
            <img
              className="h-[80%] max-h-[200px] w-[400px] object-contain"
              src={`/${product.img}`}
              alt=""
            />
          </div>
          <div className="product__right px-[5rem] ">
            <h3 className="product__name  text-3xl font-semibold mb-[1rem]">
              {product.name}
            </h3>
            <div className="product__inf mb-[6rem]">
              <p className="product__price text-xl font-medium">
                {product.price}
              </p>
              <div className="product__filters flex">
                <div className="filter__color">
                  <label htmlFor="color"></label>
                  <select
                    className="px-3 py-2 border-2 outline-none cursor-pointer m-mml"
                    id="color"
                    name="color"
                  >
                    <option value="color">Color</option>
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>
                <div className="filter-size">
                  <label htmlFor="size"></label>
                  <select
                    className="px-3 py-2 border-2 outline-none cursor-pointer m-mml"
                    name="size"
                    id="size"
                  >
                    <option value="">Size</option>
                    <option value="xs">XS</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="product__buttons flex w-full">
              <button className="product__buy w-full h-[40px] border hover:text-blue-500 hover:border-blue-500 rounded-md ">
                Buy
              </button>
              <div className="product__cart">
                <BsCart2
                  onClick={() => {
                    onAdd(product);
                  }}
                  className="w-[50px] h-[30px] text-gray-500 cursor-pointer hover:text-blue-500"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
