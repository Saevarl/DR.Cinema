import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchByMovieTitle: true,
    searchString: ''
    },

  reducers: {
    setSearchByMovieTitle(state, action) {
        state.searchByMovieTitle = action.payload
        },
    setSearchString(state, action) {
        state.searchString = action.payload
        }
    
  },
   
})


export const { setSearchByMovieTitle, setSearchString } = searchSlice.actions

export const selectSearchByMovieTitle = (state) => state.search.searchByMovieTitle
export const selectSearchString = (state) => state.search.searchString
  
export default searchSlice.reducer