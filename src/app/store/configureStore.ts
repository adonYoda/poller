import { configureStore} from "@reduxjs/toolkit";
import { pollerApi } from "../API/pollerApi";
import pollerReducer from "../Slices/pollerSlice"


export const store = configureStore({
    reducer: {
        poller: pollerReducer
    },

    middleware: (getDefaultMiddleware: any)=> getDefaultMiddleware().concat(pollerApi.middleware),
})