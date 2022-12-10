import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authenticationSlice from "./src/features/authenticationSlice";
import movieSlice from "./src/features/movieSlice";
import searchSlice from "./src/features/searchSlice";
import cinemaSlice from "./src/features/cinemaSlice";
import upcomingSlice from "./src/features/upcomingSlice";
import genreslice from "./src/features/genreSlice";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        authentication: authenticationSlice,
        movies: movieSlice,
        search: searchSlice,
        cinema: cinemaSlice,
        upcoming: upcomingSlice,
        genres: genreslice
},
    applyMiddleware: [thunk],

});

