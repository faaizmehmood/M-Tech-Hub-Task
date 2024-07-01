import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const MyStore = configureStore({
    reducer: rootReducer
})