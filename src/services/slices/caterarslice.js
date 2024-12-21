import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { fetchdishdata } from "./dishslice";

export const fetchcaterardata = createAsyncThunk( 
    'fetchcaterardata' , 
    async () => {
        const response = await fetch("http://localhost:3001/caterar")
        return await response.json()
    }
)

const caterarslice = createSlice({
    name:"caterardata",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
        caterardish:[]
    },
    reducers:{
        showdish: (action,state) => {
            console.log(action.payload,"caterar slice")
            state.caterardish.push(action.payload)
        }
    },
    extraReducers: (builder) => {
            builder.addCase(fetchcaterardata.pending, (state, action) => {
                state.isLoading = true
            })
            builder.addCase(fetchcaterardata.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            builder.addCase(fetchcaterardata.rejected, (state, action) => {
                console.log("Error", action.payload)
                state.isError = true
            })
        },
})
export const {showdish} = caterarslice.actions
export default caterarslice.reducer