import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from './articleDrawerSlice'

const articleStore = configureStore({
    reducer: {
        drawer: drawerReducer
    },
});

export type RootState = ReturnType<typeof articleStore.getState>;
export type AppDispatch = typeof articleStore.dispatch;
export default articleStore;