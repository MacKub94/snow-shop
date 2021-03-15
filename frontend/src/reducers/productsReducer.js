import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCES,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const productsReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCES) {
    return {
      ...state,
      productsLoading: false,
      products: action.payload,
      filteredProducts: action.payload,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      productsLoading: false,
      productsError: true,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCES) {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: true,
    };
  }
};

export default productsReducer;
