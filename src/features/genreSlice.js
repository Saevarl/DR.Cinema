import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const GenreSlice = createSlice({
    name: "genres",
    initialState: {
        genres: [],
        isLoading: false,

    },
    reducers: {
        startLoadingGenres: (state) => {
            state.isLoading = true;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGenres.fulfilled, (state, action) => {
                console.log("GENRES FULFILLED")
                state.genres = action.payload
                state.isLoading = false
            })

    }

})

export const fetchGenres = createAsyncThunk(
    "genres/fetchGenres",
    async (token) => { 
        const response = await fetch("http://api.kvikmyndir.is/genres", {
            headers: {
                "x-access-token": token
            }
        })
        const data = await response.json()
        return data
    }
)



             



export const { startLoadingGenres } = GenreSlice.actions;

export const selectGenres = (state) => state.genres.genres;

export const selectGenresLoading = (state) => state.genres.isLoading;

export default GenreSlice.reducer;

