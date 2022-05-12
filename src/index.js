import { createRoot } from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./contexts/ProductContext";
import { FilterProvider } from "./contexts/FilterContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { AlertProvider } from "./contexts/AlertContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <AlertProvider>
    <ProductProvider>
      <FilterProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </FilterProvider>
    </ProductProvider>
  </AlertProvider>
);
