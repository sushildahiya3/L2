import {  configureStore  } from "@reduxjs/toolkit";
import  { productReducer } from "./productSlice";

/**
 * Configuring the store for global access across the app for product state, reducers
 */
export const store = configureStore({
    reducer: { product: productReducer }
  });
  