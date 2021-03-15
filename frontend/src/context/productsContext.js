import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productsReducer.js";
import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCES,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  productsLoading: true,
  productsError: false,
  products: [],
  singleProductLoading: true,
  singleProductError: false,
  singleProduct: {},
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      const products = await response.json();
      dispatch({ type: GET_PRODUCTS_SUCCES, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    try {
      const response = await fetch(url);
      const singleProduct = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCES, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts("/api/products");
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
