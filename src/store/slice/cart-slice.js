import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, actions) {
            console.log(actions)
            state.push(actions.payload);
        },
        removeFromCart(state,action){
            return state.filter((item) => item.id !== action.payload)
        },
        checkOut(state,action){
            return []
        }
    },
});

export const {addToCart , removeFromCart,checkOut} = cartSlice.actions;

export default cartSlice.reducer;
