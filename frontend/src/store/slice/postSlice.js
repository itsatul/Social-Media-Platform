import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}


const postSlice = createSlice({
   name:'posts',
   initialState,
   reducers:{
    addPost: (state,action)=>{
        state.posts = [action.payload, ...state.posts]
    },
    setPosts: (state,action)=>{
        state.posts=action.payload;
    }
   }
})
export const {addPost,setPosts} = postSlice.actions
export default postSlice.reducer 
















