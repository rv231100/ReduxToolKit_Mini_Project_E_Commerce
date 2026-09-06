import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./e-commerce/slices/productSlice";
import cartReducer from "./e-commerce/slices/CartSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
