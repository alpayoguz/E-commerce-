import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import Filters from "./components/Filters";
import { FilterProvider } from "./contexts/FilterContext";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <ProductProvider>
    <FilterProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </FilterProvider>
  </ProductProvider>
);
