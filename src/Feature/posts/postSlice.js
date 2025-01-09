import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPost } from './postApi'

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchPost = createAsyncThunk('posts/fetchpost',
    async () => {
        const post = getPost()
        return post;
    }
)

const postSlice = createSlice({
    name:"posts",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchPost.pending, (state)=>{
            state.error= false
            state.isLoading = true
        })
        builder.addCase(fetchPost.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts= action.payload
        })
        builder.addCase(fetchPost.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError=true;
            state.error= action.error?.message
        })
    }
})

export default postSlice.reducer