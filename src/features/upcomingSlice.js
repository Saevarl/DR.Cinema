import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERNAME, PASSWORD } from '@env';
import { authenticate, selectToken } from './authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as fileService from '../../services/fileService';


export const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcoming: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcoming.fulfilled, (state, action) => {
                state.upcoming = action.payload;
            })
            .addCase(fetchUpcoming.rejected, (state, action) => {
                console.log("Error: Fetching Upcoming Movies Failed");
            })
    }      
});

export const fetchUpcoming = createAsyncThunk(
    'upcoming/fetchUpcoming',
    async () => {
        const upcoming = await fileService.getAllMovies();
        const upcomingList = upcoming.map((m) => {
            const movie = JSON.parse(m.file);
            return {
                id: movie.id,
                title: movie.title,
                poster: movie.poster,
                releaseDate: movie.releaseDate,
                rating: movie.rating,
                genres: movie.genres,
                runtime: movie.runtime,
                overview: movie.overview,
            };
        });
        return upcomingList;
    })

export const selectUpcoming = (state) => state.upcoming.movie;
export default upcomingSlice.reducer;