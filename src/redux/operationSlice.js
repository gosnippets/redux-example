import { createSlice } from "@reduxjs/toolkit";


const operationSlice = createSlice({
    name: "operations",
    initialState: { total: 10 },
    reducers: {
        addition: (state, value) => {
            state.total = state.total + value.payload
        },
        subtraction: (state, value) => {
            state.total = state.total - value.payload
        }
    }
})

export const { addition, subtraction } = operationSlice.actions
export default operationSlice.reducer