import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'orders',
    initialState: {
        orders: []
    },
    reducers: {
        getAllOrders : (state, action) => {
            state.orders = action.payload.arr
        }
    }
});


export default userReducer.reducer
export const {getAllOrders} = userReducer.actions;