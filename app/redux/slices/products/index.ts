
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Product {
  id: number;
  title: string;
  priceMin: number;
  priceMax: number;
  image: string;
  featured: boolean;
}

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.push(action.payload); 
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer; 
