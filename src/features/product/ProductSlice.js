import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './ProductAPI';

const initialState = {
  product: 0,
  status: 'idle',
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.product += 1;
    },
    
    },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.product += action.payload;
      });
  },
});

export const { increment} = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
