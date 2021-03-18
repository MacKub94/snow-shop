import React, { useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  COUNT_TOTALS,
} from "../actions";

const CartContext = React.createContext();

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { product, amount } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_ITEM, payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_ITEM, payload: id });
  };

  useEffect(() => {
    dispatch({ type: COUNT_TOTALS });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
