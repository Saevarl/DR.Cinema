import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcoming: [],
        expandedMovie: null,
        },
        
    reducers: {
        setExpandedMovie: (state, action) => {
            state.expandedMovie = action.payload;
        }
    },
        extraReducers: (builder) => {
            builder
            .addCase(fetchUpcoming.fulfilled, (state, action) => {
                console.log('UPCOMING MOVIES FETCHED');
                state.upcoming = action.payload;
            })
            .addCase(fetchUpcoming.rejected, (state, action) => {
                console.log('UPCOMING MOVIES FETCH REJECTED');
            })
            
        }   
    }
);

export const fetchUpcoming = createAsyncThunk(
    'upcoming/fetchUpcoming',
    async (token) => {
        const res  = await fetch(`https://api.kvikmyndir.is/upcoming?token=${token}`, {
            method: 'GET',
        })
        const data = await res.json();
        return data;
    }
);

export const { setExpandedMovie } = upcomingSlice.actions;

export const expandedMovie = (state) => state.upcoming.expandedMovie;

export const selectUpcoming = (state) => state.upcoming.upcoming;

export default upcomingSlice.reducer;