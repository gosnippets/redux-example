import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("users/getAllUsers", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
})

export const getSingleUser = createAsyncThunk("users/getAllUsers", async (id) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users"+id)
    return res.data
})

const operationSlice = createSlice({
    name: "operation",
    initialState: { usersList: [], error: "", status: 'idle', total: 10 },
    reducers: {
        addition: (state, value) => {
            console.log("Value:", value.payload.a, value.payload.b)
            state.total = value.payload.a + value.payload.b
        },
        subtraction: (state, value) => {
            state.total = state.total - value.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUser.pending, (state) => {
            state.status = "pending"
        }).addCase(getAllUser.fulfilled, (state, action) => {
            state.status = "success"
            state.usersList = action.payload
        }).addCase(getAllUser.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export const { addition, subtraction } = operationSlice.actions
export default operationSlice.reducer