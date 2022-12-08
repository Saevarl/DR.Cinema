import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcoming: [],
    },
    reducers: {

    },
        extraReducers: (builder) => {
            builder
                .addCase(fetchUpcoming.fulfilled, (state, action) => {
                    console.log('UPCOMING MOVIES FETCHED');
                    state.upcoming = action.payload;
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
        console.log('TOKEN', token);
        const res  = await fetch(`https://api.kvikmyndir.is/upcoming?token=${token}`, {
            method: 'GET',


        })
        const data = await res.json();
        console.log('DATA', data);
        return data;
    }
);

export const selectUpcoming = (state) => state.upcoming.upcoming;

export default upcomingSlice.reducer;