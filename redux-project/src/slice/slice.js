import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}

const TaskSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const lastItem = state.todo[state.todo.length - 1];
            const newId = lastItem ? lastItem.id + 1 : 1;
            state.todo.push({ ...action.payload, id: newId })
        },
        deleteTask: (state, action) => {

            console.log(JSON.parse(JSON.stringify(state.todo)))
            state.todo = state.todo.filter((i) => {
                return i.id !== action.payload
            })
            console.log("TODO AFTER:", state.todo);

        }
    }
})

export const { addTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;