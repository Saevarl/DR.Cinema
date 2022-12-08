import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedMovie: null,
    },

  reducers: {
    setSelectedMovie: (state, action) => {
      console.log("SET SELECTED MOVIE", action.payload)
      state.selectedMovie = action.payload
    }

    

  },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.fulfilled, (state, action) => {
            console.log("MOVIES FETCHED")
            state.movies = action.payload
        })
        .addCase(fetchMovies.rejected, (state, action) => {
            console.log("REJECTED", action.error)

        }
        )

    }
})


  export const fetchMovies = createAsyncThunk(
      'movies/fetchMovies',
      async (token) => {
          const res = await fetch(`https://api.kvikmyndir.is/movies?token=${token}`, {
              method: 'GET',
              
              
            })
            
          const data = await res.json()
          return data
      }
  )

  export const { setSelectedMovie } = movieSlice.actions

  export const selectSelectedMovie = (state) => state.movies.selectedMovie

  export const selectMovies = (state) => state.movies.movies
  
  export default movieSlice.reducer