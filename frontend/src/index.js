import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { ProductsProvider } from "./context/productsContext.js";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
