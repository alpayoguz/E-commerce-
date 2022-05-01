import {createRoot} from "react-dom/client"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";

const root = createRoot(document.getElementById("root"));

root.render(
    <ProductProvider>
         <App/>
    </ProductProvider>

)
