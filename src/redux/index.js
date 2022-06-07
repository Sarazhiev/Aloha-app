import {  configureStore  } from '@reduxjs/toolkit'
import user from "./reducers/user"


const store = configureStore({
    reducer: {
        user,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store