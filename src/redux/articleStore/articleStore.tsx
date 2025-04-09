import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from './articleDrawerSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const articleStore = configureStore({
    reducer: {
        drawer: drawerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof articleStore.getState>;
export type AppDispatch = typeof articleStore.dispatch;
export default articleStore;