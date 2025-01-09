import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../Feature/Counters/counterSlice"
const store = configureStore({
    reducer:{
        counters: counterSlice
    }
})

export default store