import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import categoryReducer from "../../categories/categorySlice";
import productReducer from "../../products/productSlice";

// Store uchun tiplash
export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
  }
});

// Store'ni tipini aniqlash
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
