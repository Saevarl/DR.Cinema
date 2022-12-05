import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authenticationSlice from "./src/features/authenticationSlice";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        authentication: authenticationSlice
    },
    applyMiddleware: [thunk],

});

