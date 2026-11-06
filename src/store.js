import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import searchSlice from "./slices/searchSlice";
import productSlice from "./slices/productSlice";
import { productApi } from "./services/productsApi";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    product: productSlice.reducer,
    search: searchSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
