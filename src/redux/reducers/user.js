import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: {
            email : '',
            phoneNumber : ''
        }
    },
    reducers: {
        registerUser : (state, action) => {
            state.user = action.payload.obj
        },
        logOutUser : (state) => {
            state.user = {
                email: ''
            }
        }
    }
});


export default userReducer.reducer
export const {registerUser, logOutUser} = userReducer.actions;