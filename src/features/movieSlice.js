import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedMovie: null,
    isLoading: false,
    },

  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload
    },
    
    startLoadingMovies: (state) => {
      state.isLoading = true
    },
    updateMovies: (state, action) => {
      state.movies = action.payload
    }



    

  },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.fulfilled, (state, action) => {
            console.log("FETCHED MOVIES")
            let movies = action.payload
            movies = movies.map((movie) => {
              return({
                id: movie._id,
                title: movie.title,
                plot: movie.plot,
                year: movie.year,
                genres: movie.genres,
                showtimes: movie.showtimes,
                poster: movie.poster,
                imdbRating: movie.ratings.imdb,
                imdbId: movie.ids.imdb,
                actors: movie.actors_abridged,
                directors: movie.directors_abridged,
                duration: movie.durationMinutes,
                
              }
              )
            })

            state.movies = movies
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

  export const { setSelectedMovie, startLoadingMovies, updateMovies} = movieSlice.actions

  export const selectSelectedMovie = (state) => state.movies.selectedMovie

  export const selectMovies = (state) => state.movies.movies

  export const selectIsLoading = (state) => state.movies.isLoading
  
  export default movieSlice.reducer