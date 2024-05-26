import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import productReducer from "../features/productsSlice";

const store = configureStore({
    reducer : {
        counters : counterReducer,
        products : productReducer,
    }
})

export default store;