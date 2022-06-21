import {  configureStore  } from '@reduxjs/toolkit'
import user from "./reducers/user"
import clothes from "./reducers/clothes";
import basket from './reducers/basket'


const store = configureStore({
    reducer: {
        user,
        clothes,
        basket
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store