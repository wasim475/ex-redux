import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
]
const counterSlice = createSlice({
    name: "counters",
    initialState,
    reducers:{
        increament: (state, action)=>{
            const counterIndex = state.findIndex(c=>c.id===action.payload)
            state[counterIndex].value++
        },
        decreament: (state, action)=>{
            const counterIndex = state.findIndex(c=>c.id=== action.payload)
            state[counterIndex].value--
        },
    }
})

export default counterSlice.reducer;
export const {increament, decreament}= counterSlice.actions