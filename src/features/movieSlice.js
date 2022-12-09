import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { USERNAME, PASSWORD } from '@env'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedMovie: null,
    isLoading: false,
    },

  reducers: {
    setSelectedMovie: (state, action) => {
      console.log("SET SELECTED MOVIE", action.payload)
      state.selectedMovie = action.payload
    },
    
    startLoadingMovies: (state) => {
      state.isLoading = true
    }

    

  },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.fulfilled, (state, action) => {
            console.log("FETCHED MOVIES")
            state.movies = action.payload
            state.isLoading = false
        })
        .addCase(fetchMovies.rejected, (state, action) => {
            console.log("FETCH MOVIES REJECTED")
            
        })
        
        

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

  export const { setSelectedMovie, startLoadingMovies} = movieSlice.actions

  export const selectSelectedMovie = (state) => state.movies.selectedMovie

  export const selectMovies = (state) => state.movies.movies

  export const selectIsLoading = (state) => state.movies.isLoading
  
  export default movieSlice.reducer