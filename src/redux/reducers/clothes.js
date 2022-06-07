import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'clothes',
    initialState: {
      clothes : []
    },
    reducers: {
        getAll : (state, action) => {
            state.clothes = action.payload.arr
        },
    }
});


export default userReducer.reducer
export const {getAll} = userReducer.actions;