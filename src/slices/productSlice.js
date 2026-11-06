import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:7071/products/${productId}`,
      );
      if (!response.ok) {
        return rejectWithValue({ message: "Failed to fetch product" });
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue({
        message: `Network Error: ${err.message}`,
      });
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message ??
          action.error.message ??
          "Failed to fetch product";
      });
  },
});

export default productSlice;
