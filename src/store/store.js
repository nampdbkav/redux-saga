import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../reducer/rootReducer";
import { todos } from "../reducer/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
});
// use the same saga middleware that you have enhanced your store with
sagaMiddleware.run(todos);


export default store