import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as fileService from '../services/fileService'


const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: '',

    },
  
  reducers: {
    
  },
    extraReducers: (builder) => {
        builder
        .addCase(authenticate.fulfilled, (state, action) => {
            console.log("AUTHENTICATED", action.payload)
            state.accessToken = action.payload
        })
        .addCase(authenticate.rejected, (state, action) => {
            console.log("REJECTED")
        })
        .addCase(authenticate.pending, (state, action) => {
            console.log("PENDING")
        })
        .addCase(loadToken.fulfilled, (state, action) => {
            console.log("TOKEN LOADED", action.payload)
            state.accessToken = action.payload.token
        })
        


    }
})

export const authenticate = createAsyncThunk(
    'authentication/authenticate',
    async (credentials) => {
        const response = await fetch('https://api.kvikmyndir.is/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        return data.token
    }
)

export const loadToken = createAsyncThunk(
    'authentication/loadToken',
    async () => {
        const token = await fileService.loadToken()
        return token
    }
)

export const selectToken = (state) => state.authentication.accessToken

export default authenticationSlice.reducer