// "use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: parseInt(localStorage.getItem('counterValue')) || 1,
    cartItems: [],
  };

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // 
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    // 
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { increment, decrement, incrementByAmount , addToCart, removeFromCart, clearCart } = counterSlice.actions

export default counterSlice.reducer;