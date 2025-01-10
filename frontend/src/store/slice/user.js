import {createSlice} from "@reduxjs/toolkit";
// ------------------------------------------------------------------------
const userSlice = createSlice({

    name: "user",
    initialState: {
        accessToken: undefined,
        details: null,
        email: ""
    },
    reducers: {
        login(state, action) {
            state.accessToken = action.payload;
            // console.log(" I am loged");
        },
        logout(state, action) {
            state.accessToken = null;
            state.details = null;
            localStorage.removeItem("accessToken");
            // console.log(" NOOOOOOOO Loged");
        },
        loadUser(state, action) {
            state.details = action.payload;
        },
        AddEmail(state, action) {
            state.email = action.payload;
        }
    }
})
// ------------------------------------------------------------------------
export const {login, logout, loadUser, AddEmail} = userSlice.actions;
export default userSlice.reducer;