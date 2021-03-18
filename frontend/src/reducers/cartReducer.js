import React from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  COUNT_TOTALS,
} from "../actions";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, product } = action.payload;
    const existingItem = state.cart.find((i) => i.id === product.id);
    if (existingItem) {
      const tempCart = state.cart.map((i) => {
        if (i.id === existingItem.id) {
          i.amount = i.amount + amount;
        }
        return i;
      });
      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: product.id,
        amount: amount,
        image: product.image,
        price: product.price,
        title: product.title,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === REMOVE_ITEM) {
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === INCREASE_ITEM) {
    const tempCart = state.cart.map((i) => {
      if (i.id === action.payload) {
        let newAmount = i.amount + 1;
        return { ...i, amount: newAmount };
      } else return i;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DECREASE_ITEM) {
    const tempCart = state.cart.map((i) => {
      if (i.id === action.payload) {
        let newAmount = i.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return { ...i, amount: newAmount };
      } else return i;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === COUNT_TOTALS) {
    const { totalItems, totalPrice } = state.cart.reduce(
      (total, cartItem) => {
        total.totalItems += cartItem.amount;
        total.totalPrice += cartItem.amount * cartItem.price;
        return total;
      },
      {
        totalItems: 0,
        totalPrice: 0,
      }
    );
    return { ...state, totalItems, totalPrice };
  }
};

export default cartReducer;
