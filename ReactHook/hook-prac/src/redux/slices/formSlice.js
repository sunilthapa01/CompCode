import { createSlice } from "@reduxjs/toolkit";
import { getformThunk, postFormThunk } from "./formThunk";

const initialState = {
    field: []
}

const formSlice = createSlice({
    name: "form",
    initialState,
    // reducers: {
    //     addForm(state, action) {
    //         console.log(action.payload)
    //         state.field.push(action.payload)
    //     }
    // }
   
    extraReducers: (builder) => {
        builder.addCase(getformThunk.fulfilled, (state, action) => {
            state.field = action.payload;
        })
        builder.addCase(postFormThunk.fulfilled, (state, action) => {
            state.field.push(action.payload)
        })
    }
})

export default formSlice.reducer;