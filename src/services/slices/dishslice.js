import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchdishdata = createAsyncThunk('fetchdishdata', async () => {
    const response = await fetch("http://localhost:3001/dish")
    return await response.json()
});

const dishslice = createSlice({
    name: "dishdata",
    initialState: {
        isLoading: false,
        data: null,
        isError:false,
        dishshesh:[],
        totalamount:0,
    },
    reducers:{
        addItem:(state , action)=>{
            console.log(action.payload , "action payload")
            state.dishshesh.push(action.payload)

            const amount = state.dishshesh?.reduce((total, item) => {
                return total + parseInt(item.price) * parseInt(item.counts || 0);
            }, 0);
            state.totalamount = amount
        },
        removeItem:(state , action) =>{
            console.log(action.payload,"remove item")
            state.dishshesh.pop(action.payload)
            const amount = state.dishshesh?.reduce((total, item) => {
                return total + parseInt(item.price) * parseInt(item.counts || 0);
            }, 0);
            state.totalamount = amount
        },
    },  
    extraReducers: (builder) => {
        builder.addCase(fetchdishdata.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchdishdata.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchdishdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    },
})

export const { addItem, removeItem } = dishslice.actions;

export default dishslice.reducer;