import React from "react";
import { useCart } from "../contexts/CartContext";
import { BsFillBasketFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const CartSignIn = () => {

  const {
    cartItems,
    setCartItems,
    onAdd,
    onRemove,
    priceSum,
    itemsPrice,
    removeCompletely,
    shippingPrice,
  } = useCart();
  const totalCartProductCount = cartItems.reduce((a, b) => a + b.qty, 0)

  return cartItems.length > 0 ? (
    <div className="cart-container px-5 py-10 w-[75%] mx-auto flex items-center">
      <div className="cart-left">
        <h4 className="car-header text-3xl py-3 my-5  ">
          Basket ({totalCartProductCount} product{totalCartProductCount > 1 ? "s" : ""})
        </h4>
        <div className="cart-products flex flex-col border-2 ">
          {cartItems.map((item) => {
            return (
              <>
                <div className="single-product flex  items-center justify-between border w-[50vw] ">
                  <div className="img-container w-[15%] h-[100px] border-r-2">
                    <img
                      className="h-full w-full object-contain"
                      src={item.img}
                    />
                  </div>
                  <div className="product-desc flex grow justify-around  mx-5  ">
                    <p className="text-xl w-[200px]">{item.productName}</p>
                    <div>
                      <button
                        onClick={() => onRemove(item)}
                        className="px-[4px] rounded bg-red-500"
                      >
                        -
                      </button>
                      <span className="px-[7px]">{item.qty}</span>

                      <button
                        onClick={() => {
                          onAdd(item);
                        }}
                        className="px-[4px] bg-blue-500 rounded"
                      >
                        +
                      </button>
                    </div>
                    <span className="">{item.price}</span>
                    <button onClick={() => removeCompletely(item)}>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="cart-right whitespace-nowrap mx-5 border p-[3rem] grow ">
        <p className="text-2xl font-bold">Order Summary</p>
        <ul className="border-b flex flex-col items-start ">
          {cartItems.map((item) => (
            <li className="px-2 py-2 flex font-semibold">
              <span className="px-[3px]">{item.productName}</span>
              <span className="px-[3px]">{item.qty}</span>
              <span className="px-[3px]">X</span>
              <span className="px-[3px]">{item.price}</span>
            </li>
          ))}
        </ul>
        <ul className="flex justify-between text-[15px] py-5">
          <li className="flex flex-col font-semibold">
            <span>Subtotal</span>
            {itemsPrice > 20 && itemsPrice < 100 ? (
              <span className="text-xs">{`Add ${
                itemsPrice < 100 && (100 - itemsPrice).toFixed(2)
              } for free shipping`}</span>
            ) : null}
          </li>

          <li className="font-semibold">{itemsPrice.toFixed(2)}</li>
        </ul>

        <ul className="flex justify-between text-[15px] py-5">
          <li className="font-semibold">Shipping Price</li>
          <li className="font-semibold">{shippingPrice}$</li>
        </ul>
        <hr></hr>
        <ul className="flex justify-between text-[15px] py-5">
          <li className="font-bold">Total</li>
          <li className="font-bold">
            {(itemsPrice + shippingPrice).toFixed(2)}$
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className=" border w-[40vw] h-[20vh] mx-auto flex flex-col items-center justify-center">
      <p className="py-5 text-2xl font-serif">No item in Basket</p>
      <div className="py-5">
        <BsFillBasketFill className="w-[70px] h-[70px]" />
      </div>
    </div>
  );
};

export default CartSignIn;
