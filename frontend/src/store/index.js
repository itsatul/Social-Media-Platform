import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import tiaraReducer from "./slice/tiaraslice";
import postReducer from "./slice/postSlice";
import friendSlice from "./slice/friendSlice";
// ------------------------------------------------------------------------

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    tiara: tiaraReducer,
    friends: friendSlice,
  },
});
// ------------------------------------------------------------------------
export default store;
