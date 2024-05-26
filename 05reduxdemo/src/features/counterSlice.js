import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        value: 4,
    },
    {
        id: 2,
        value: 20,
    },
]

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase : (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload)
            state[counterIndex].value ++;
        },

        decrease : (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload)
            state[counterIndex].value --;
        }
    }
})

export default counterSlice.reducer;
export const {increase, decrease}  = counterSlice.actions;