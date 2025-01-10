import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../Feature/Counters/counterSlice"
import postSlice from '../Feature/posts/postSlice';
import userSlice from '../Feature/user/users'
const store = configureStore({
    reducer:{
        counters: counterSlice,
        postz: postSlice,
        users: userSlice
    }
})

export default store