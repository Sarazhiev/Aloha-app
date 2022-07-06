import {  configureStore  } from '@reduxjs/toolkit'
import user from "./reducers/user"
import clothes from "./reducers/clothes";
import basket from './reducers/basket'
import orders from './reducers/orders'


const store = configureStore({
    reducer: {
        user,
        clothes,
        basket,
        orders
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store