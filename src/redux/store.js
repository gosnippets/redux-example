import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import operationReducer from "./operationSlice";


const middleware = [logger, thunkMiddleware]

const store = configureStore({
    reducer: {
        operation: operationReducer
    },
    middleware
})

export default store;