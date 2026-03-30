import { configureStore } from "@reduxjs/toolkit";
import   TaskSliceReducer  from '../slice/slice'

export const store = configureStore({

    reducer: {
        todoItem: TaskSliceReducer
    }
})