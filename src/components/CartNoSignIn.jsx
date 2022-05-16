import React from "react";
import { Link } from "react-router-dom";

const CartNoSignIn = () => {
  return (
    <div className="cart__nosign  w-[80vw] h-[60vh] mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center p-10 border">
        <p className="my-5 text-xl font-semibold">You have to log in first</p>
        <Link to="/signin" className="text-indigo-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default CartNoSignIn;
