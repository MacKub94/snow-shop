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

const productsReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCES) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      productsLoading: false,
      products: action.payload,
      filteredProducts: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      productsLoading: false,
      productsError: true,
    };
  }
  if (action.type === START_FETCHING_SINGLE_PRODUCT) {
    return {
      ...state,
      singleProductLoading: true,
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
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { category, brand, sex, price } = state.filters;
    let tempProducts = [...state.products];
    if (category !== "All") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (brand !== "All") {
      tempProducts = tempProducts.filter((product) => product.brand === brand);
    }
    if (sex !== "All") {
      tempProducts = tempProducts.filter((product) => product.sex === sex);
    }
    tempProducts = tempProducts.filter((product) => product.price <= price);
    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    console.log("clear");
    return {
      ...state,
      filters: {
        ...state.filters,
        category: "All",
        brand: "All",
        sex: "All",
        price: state.filters.max_price,
      },
    };
  }
};

export default productsReducer;
