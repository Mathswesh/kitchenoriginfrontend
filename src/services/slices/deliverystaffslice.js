import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchdeliverystaffdata = createAsyncThunk(
    'deliverystaffdata',
    async () => {
        const response = await fetch('http://localhost:3001/deliverystaff')
        return await response.json()
    }   
)

const deliverystaffslice = createSlice({
    name:'deliverystaffdata',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers: (builer) =>{
        builer.addCase(fetchdeliverystaffdata.pending,  (state , action) => { 
            state.isLoading=true
        })
        builer.addCase(fetchdeliverystaffdata.fulfilled,(state , action) => { 
            state.isLoading=false 
            state.data=action.payload
        })
        builer.addCase(fetchdeliverystaffdata.rejected, (state , action) => {
            console.log("Error in deliverystaffdata")
            state.isError=true
        })
    }
})

export default deliverystaffslice.reducer