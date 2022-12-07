import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcomings: [],
        selectedUpcoming: null
    },
    reducers: {
        selectUpcoming: (state, action) => {
            state.selectedUpcoming = action.payload;
        }
    },
        extraReducers: (builder) => {
            builder
                .addCase(fetchUpcoming.fulfilled, (state, action) => {
                    console.log('UPCOMING MOVIES FETCHED');
                    state.upcomings = action.payload;
                })
                .addCase(fetchUpcoming.rejected, (state, action) => {
                    console.log("REJECTED: ", action.error);
                })
            
        }   
    }
);

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

export const { selectUpcoming } = upcomingSlice.actions;

export const selectUpcomings = (state) => state.upcoming.upcomings;

export const selectSelectedUpcoming = (state) => state.upcoming.selectedUpcoming;

export default upcomingSlice.reducer;