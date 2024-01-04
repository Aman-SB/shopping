import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/slice/cart-slice' 

const store = configureStore({
    reducer : {
        cart : cartReducer
    },
});

export default store;