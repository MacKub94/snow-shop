import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { ProductsProvider } from "./context/productsContext.js";
import { CartProvider } from "./context/cartContext.js";
import { UserProvider } from "./context/userContext";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-jti6o090.eu.auth0.com
// 3bIMj4TRSJqJmep6WRHQR5Ny3LOek3NN

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jti6o090.eu.auth0.com"
      clientId="3bIMj4TRSJqJmep6WRHQR5Ny3LOek3NN"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
