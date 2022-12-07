import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcoming: []
    },
    reducers: {
        extraReducers: (builder) => {
            builder
                .addCase(fetchUpcoming.fulfilled, (state, action) => {
                    console.log('MOVIES FETECHED');
                    state.upcoming = action.payload;
                })
                .addCase(fetchUpcoming.rejected, (state, action) => {
                    console.log("Error: Fetching Upcoming Movies Failed");
                })
            
        }   
    }
});

export const fetchUpcoming = createAsyncThunk(
    'upcoming/fetchUpcoming',
    async (token) => {
        const res  = await fetch(`https://api.kvikmyndir.is/upcoming?=${token}`, {
            method: 'GET',
        })
        const data = await res.json();
        return data;
    }
);

export const selectUpcoming = (state) => state.upcoming.upcoming;

export default upcomingSlice.reducer;