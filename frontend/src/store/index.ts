import { configureStore } from "@reduxjs/toolkit";
import { api as v1 } from "./api"
import appReducer from "./slice/app";
import authReducer from "./slice/auth";
import calendarReducer from "./slice/app/calendarSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        calendar: calendarReducer,
        [v1.reducerPath]: v1.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(v1.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
