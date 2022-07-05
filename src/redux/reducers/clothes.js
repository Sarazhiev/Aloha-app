import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'clothes',
    initialState: {
      clothes : [],
      status: 'all'
    },
    reducers: {
        getAll : (state, action) => {
            state.clothes = action.payload.arr
        },
        changeStatus : (state, action) => {
            state.status = action.payload
        }
    }
});


export default userReducer.reducer
export const {getAll,changeStatus} = userReducer.actions;