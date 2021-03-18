import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { ProductsProvider } from "./context/productsContext.js";
import { CartProvider } from "./context/cartContext.js";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
