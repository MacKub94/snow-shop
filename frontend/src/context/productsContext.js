import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productsReducer.js";
import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_ERROR,
  START_FETCHING_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCES,
  GET_SINGLE_PRODUCT_ERROR,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const initialState = {
  productsLoading: true,
  productsError: false,
  products: [],
  singleProductLoading: true,
  singleProductError: false,
  singleProduct: {},
  filteredProducts: [],
  filters: {
    category: "All",
    brand: "All",
    sex: "All",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
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
      dispatch({ type: START_FETCHING_SINGLE_PRODUCT });
      const response = await fetch(url);
      const singleProduct = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCES, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ["All", ...new Set(unique)];
  };

  const updateFilters = (name, value) => {
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    fetchProducts("/api/products");
  }, []);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
        getUniqueValues,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
