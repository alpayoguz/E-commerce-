import React, { useContext, useState, useEffect } from "react";
import { popularProducts } from "../constants/data";
import Product from "./Product";
import { Link } from "react-router-dom";
import { FilterContext, useFilter } from "../contexts/FilterContext";

const Products = ({ productsData }) => {
  const [products, setProducts] = useState(popularProducts);
  const { filterObject } = useContext(FilterContext);
  const { filteredProducts, setFilteredProducts } = useFilter();

  useEffect(() => {
    setFilteredProducts(() => {
      if (filterObject.type === "all" && filterObject.gender === "all") {
        return products;
      } else {
        return products.filter((item) =>
          Object.entries(filterObject).every(([key, value]) => {
            if (key === "gender" || key === "type") {
              return (
                item[key].includes(value) ||
                value === "all" ||
                item[key] === "all"
              );
            } else {
              return true;
            }
          })
        );
      }
    });
  }, [filterObject]);

  useEffect(() => {
    if (filterObject.sort === "asc") {
      setFilteredProducts((prevVal) => {
        return [...prevVal].sort((a, b) => {
          return a.price - b.price;
        });
      });
    } else if (filterObject.sort === "desc") {
      setFilteredProducts((prevVal) => {
        return [...prevVal].sort((a, b) => {
          return b.price - a.price;
        });
      });
    }
  }, [filterObject]);

  return (
    <>
      <div className="products-container flex flex-col w-[100vw] h-[50vh] px-10 mx-auto  mt-[3rem] py-5 ">
        <h1 className="mb-4 text-3xl">POPULARS</h1>
        <div className="flex overflow-x-auto overflow-y-hidden">
          {productsData.length > 0 ? (
            productsData.map((item) => {
              return <Product key={item.id} item={item} />;
            })
          ) : (
            <p>No item found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
