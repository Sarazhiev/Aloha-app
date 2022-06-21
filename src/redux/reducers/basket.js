import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'basket',
    initialState: {
        basket: []
    },
    reducers: {
       addCart : (state, action) => {
           state.basket = [...state.basket, action.payload]
       },
        getFromLocalStorage : (state, action) => {
           state.basket = action.payload.arr
        },
        removeCart : (state, action) => {
           state.basket = action.payload.arr
        }
    }
});


export default userReducer.reducer
export const {addCart,getFromLocalStorage, removeCart} = userReducer.actions;