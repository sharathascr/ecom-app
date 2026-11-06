import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      const nextProducts = Array.isArray(action.payload) ? action.payload : [];
      state.products = nextProducts;
      state.filteredProducts = nextProducts;
    },
    filterProducts: (state, action) => {
      const searchValue = (action.payload ?? "").trim().toLowerCase();
      state.filteredProducts = state.products.filter((product) =>
        product?.name?.toLowerCase().includes(searchValue),
      );
    },
  },
});

export const { fetchProducts, filterProducts } = productsSlice.actions;

export default productsSlice;
