import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import Filters from "./components/Filters";
import { GenderProvider } from "./contexts/GenderContext";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

const root = createRoot(document.getElementById("root"));

root.render(
  <ProductProvider>
    <GenderProvider>
       <Cart/>
    </GenderProvider>
  </ProductProvider>
);
