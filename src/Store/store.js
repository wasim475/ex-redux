import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../Feature/Counters/counterSlice"
import postSlice from '../Feature/posts/postSlice';
const store = configureStore({
    reducer:{
        counters: counterSlice,
        postz: postSlice
    }
})

export default store