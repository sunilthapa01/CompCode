import { createAsyncThunk } from "@reduxjs/toolkit";
import { formGet ,formPost} from "../../services/formApi";

export const getformThunk = createAsyncThunk(
    "form/getform",
    async (_, thunkApi) => {
        try {
            const response = await formGet();
            return response;
        } catch (error) {
            // console.log(error)
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

// posthunk

export const postFormThunk = createAsyncThunk(
    "form/postform",
    async (data, thunkApi) => {
        try {
            const response = await formPost(data);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }


)