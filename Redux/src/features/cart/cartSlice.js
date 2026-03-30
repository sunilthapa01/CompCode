import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const cartSlice = createSlice({
    name: 'item',
    initialState:initialState,
    reducers: {
        addItem: (state, actions) => {

            const existingItem = state.items.find((item) => item.id === actions.payload.id)
            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.items.push({ ...actions.payload, quantity: 1 });    
            }
        }
        
    }
})

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;