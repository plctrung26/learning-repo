import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import drawerReducer from "./drawerSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        drawer: drawerReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;