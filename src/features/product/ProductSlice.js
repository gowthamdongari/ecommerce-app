import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './ProductAPI';

const initialState = {
  counter: 0,
  status: 'idle',
  products:{}
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
      state.counter += 1;
    },
    
    },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;

      });
  },
});

export const { increment} = productSlice?.actions;

export const selectAllProducts = (state) => {
  
 try {
  console.log(state.counter.products)
 
 } catch (error) {
  console.log(error)
 } 
 if (Object.keys(state?.counter?.products).length>0){
  return state?.counter?.products}
  else{
    return null
  }
 }
  

export default productSlice.reducer;
