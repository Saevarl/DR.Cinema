import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


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
            console.log("ACTION PAYLOAD", action.payload)
            state.accessToken = action.payload.token
            
        })
        .addCase(authenticate.rejected, (state, action) => {
            console.log("REJECTED")
            console.log("ERROR", action.error)
        })
        .addCase(authenticate.pending, (state, action) => {
            console.log("PENDING")
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
        return data
    }
)

export const selectToken = (state) => state.authentication.accessToken

export default authenticationSlice.reducer