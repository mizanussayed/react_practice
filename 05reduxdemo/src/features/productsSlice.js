import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProduct } from './productApi';

const initialState = {
    product: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchProducts = createAsyncThunk('producst/getProduct',
    async () => {
        const data =  await getProduct();
        return data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        }).addCase(fetchProducts.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default productsSlice.reducer;

