import {  configureStore  } from '@reduxjs/toolkit'
import user from "./reducers/user"
import clothes from "./reducers/clothes";


const store = configureStore({
    reducer: {
        user,
        clothes

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store