import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authenticationSlice from "./src/features/authenticationSlice";
import movieSlice from "./src/features/movieSlice";
import searchSlice from "./src/features/searchSlice";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        authentication: authenticationSlice,
        movies: movieSlice,
        search: searchSlice

},
    applyMiddleware: [thunk],

});

