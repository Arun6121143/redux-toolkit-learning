import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return res?.json();
});

export default productSlice.reducer;
