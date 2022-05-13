import React, { useEffect, useRef, useState } from "react";
import "../css/App.css";
import { useAuth } from "../contexts/AuthContext";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  let currentUserEmail = currentUser ? currentUser.email : "";
  const {cartLength} = useCart();
  const navbar = useRef();

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch (error) {
      setError("Logout failed!");
    }
  }
  
  
 
  function fixNav(){
    const topOfNav = navbar.current.offsetTop
   

     if( (window.scrollY  - 10) > topOfNav){
       navbar.current.classList.add("fixed-nav")
     }else{
      navbar.current.classList.remove("fixed-nav")

     }
    }

  window.addEventListener("scroll", ()=>{
    fixNav();
  });

  return (
    <>
      <nav ref={navbar}   className="flex items-center justify-between w-full px-5 py-3 mx-auto border-b navbar lg top:0 position:sticky ">
        <div>
          <Link to="/">
            <h3 className="font-mono text-xl font-medium lg:text-4xl ">SHOPSELF</h3>
          </Link>
        </div>
        <div>
          <ul className="flex">
            {currentUser ? (
              <ul className="flex">
                {currentUser && (
                  <li>
                    <p className="font-serif font-bold">
                      Hi,{" "}
                      {currentUserEmail?.slice(
                        0,
                        currentUserEmail?.indexOf("@")
                      )}
                    </p>{" "}
                  </li>
                )}
                <li
                  onClick={handleLogout}
                  className="px-2 cursor-pointer  scale-[99%] hover:scale-[110%]"
                >
                  <BiLogOut className="w-6 h-6" />
                </li>
                <Link to="/cart">
                  <li className="px-2 cursor-pointer scale-[99%] hover:scale-[110%] flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                   {cartLength > 0 ?  <span className="text-[12px] w-[16px] h-[20px] rounded-[50%] text-center text-white bg-blue-400">{cartLength}</span> : ""  } 
                  </li>
                </Link>
              </ul>
            ) : (
              <>
                <li className="px-[4px] lg:px-[1rem] cursor-pointer tracking-[1px] font-medium scale-[98%]  hover:scale-[100%] hover:tracking-[1.5px]  duration-200 ease-in-out">Register</li>
                <Link to="/signin">
                  <li className="px-[4px] lg:px-[1rem] cursor-pointer tracking-[1px] font-medium scale-[98%]  hover:scale-[100%] hover:tracking-[1.5px]  duration-200 ease-in-out">Sign In</li>
                </Link>
                <Link to="/cart">
                  <li className="px-[4px] lg:px-[1rem] cursor-pointer  scale-[95%]  hover:scale-[100%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>     
    </>
  );
};

export default Navbar;
