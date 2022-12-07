import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const cinemaSlice = createSlice({
    name: "cinema",
    initialState: {
        cinemas: [],
        selectedCinema: null,

    },
    reducers: {
        selectCinema: (state, action) => {
            let cinema = action.payload
            
            if (cinema !== null) {
                //Fixes the problem with trailing whitespace in key names
                cinema = JSON.parse(JSON.stringify(cinema))
                for (let key in cinema) {
                    let newKey = key.trim()
                    if (newKey !== key) {
                        cinema[newKey] = cinema[key]
                        delete cinema[key]
            }
            }
                //removes <br> from description
                if (cinema["description"] !== null) {
                cinema["description"] = cinema["description"].replace(/<br>|<b>|\n/g, "")
                }
            }
            
            
            state.selectedCinema = cinema
        }
        

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCinemas.fulfilled, (state, action) => {
                state.cinemas = action.payload
            })
            .addCase(fetchCinemas.rejected, (state, action) => {
                console.log("REJECTED", action.error)
            })
    }
})

export const fetchCinemas = createAsyncThunk(
    'cinema/fetchCinemas',
    async (token) => {
        const response = await fetch('https://api.kvikmyndir.is/theaters',{
                method: 'GET',
                headers: {
                    "x-access-token": token,
                    'Content-Type': 'application/json'
                }

        })
        const data = await response.json()
        
        return data
    }
)

export const { selectCinema } = cinemaSlice.actions

export const selectCinemas = (state) => state.cinema.cinemas

export const selectSelectedCinema = (state) => state.cinema.selectedCinema

export default cinemaSlice.reducer
