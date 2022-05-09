import React, { useState } from "react";
import "../css/App.css";
import { useAuth } from "../contexts/AuthContext";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  let currentUserEmail= currentUser ? currentUser.email : ""

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch (error) {
      setError("Logout failed!");
    }
  }

  return (
    <>
      <nav className="flex container lg mx-auto justify-between py-3 items-start">
        <div>
          <h3 className="text-4xl font-medium font-mono">SHOPSELF</h3>
        </div>
        <div>
          <ul className="flex">
            {currentUser ? (
              <ul className="flex">
                { currentUser && <li><p className="font-serif font-bold">Hi, {currentUserEmail?.slice(0, currentUserEmail?.indexOf("@"))}</p> </li>}
                <li  onClick={handleLogout} className="px-2 cursor-pointer  scale-[99%] hover:scale-[110%]">
                  <BiLogOut className="w-6 h-6" />
                </li>
                <Link to="/cart">
                  <li className="px-2 cursor-pointer scale-[99%] hover:scale-[110%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
              </ul>
            ) : (
              <>
               
                  <li className="px-2 cursor-pointer">Register</li>
                  <Link to="/signin">
                    <li className="px-2 cursor-pointer">Sign In</li>
                  </Link>
                  <li className="px-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
         
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
