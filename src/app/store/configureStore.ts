import { configureStore} from "@reduxjs/toolkit";
import { pollerApi } from "../API/pollerApi";
import pollerReducer from "../Slices/pollerSlice"


export const store = configureStore({
    reducer: {
        [pollerApi.reducerPath]: pollerApi.reducer,
        poller: pollerReducer
    },

    middleware: (getDefaultMiddleware: any)=> getDefaultMiddleware().concat(pollerApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;