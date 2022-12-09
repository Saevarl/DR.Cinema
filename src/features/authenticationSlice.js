import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';


const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: '',
    isLoading: false,
    },
  
  reducers: {
        startLoadingToken: (state) => {
            state.isLoading = true
        }
    
    
  },
    extraReducers: (builder) => {
        builder
        .addCase(authenticate.fulfilled, (state, action) => {
            console.log("AUTHENTICATED", action.payload)
            state.accessToken = action.payload
            state.isLoading = false
        })
        .addCase(authenticate.rejected, (state, action) => {
            console.log("AUTH REJECTED")
            
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


export const { startLoadingToken } = authenticationSlice.actions

export const selectTokenIsLoading = (state) => state.authentication.isLoading

export const selectToken = (state) => state.authentication.accessToken

export default authenticationSlice.reducer