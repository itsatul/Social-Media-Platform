// ---------- IMPORTS ----------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
    "userData/fetchUserData",
    async () => {
        const params = {
            email: "pikachu@byom.de",
            username: "Pikachu",
        };
        const token = window.localStorage.getItem("accessToken");

        const res = await axios.get(
            "https://motion.propulsion-home.ch/backend/api/users/me/",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params,
            }
        );
        return res.data;
    }
);

export const updateUserData = createAsyncThunk(
    // update user data with api call
    "userData/updateUserData",
    async (updatedUserData, { dispatch, rejectWithValue }) => {
        const token = window.localStorage.getItem("accessToken");

        try {
            const res = await axios.patch(
                "https://motion.propulsion-home.ch/backend/api/users/me/",
                updatedUserData, // data that should be updated
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        //"Cache-Control": "no-cache",
                    },
                }
            );

            //dispatch(fetchUserData()); // fetching updated data from API (after patch)
            console.log("response from PATCH", res.data);
            return res.data;
        } catch (error) {
            console.log("patch request failed:", error.response);
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

const tiaraSlice = createSlice({
    name: "tiara",
    initialState: {
        userData: {
            things_user_likes: [],
        },
        status: "idle",
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = "loading user data";
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = "fetching user data succeeded";
                state.userData = action.payload;
                console.log("Action Payload from get request:", action.payload);
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = "fetching user data failed";
                state.error = action.error.message;
            })
            .addCase(updateUserData.pending, (state) => {
                state.status = "updating user data";
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.status = "user data successfully updated";
                state.userData = action.payload;
                console.log(
                    "update data successful from slice",
                    action.payload
                );
            })
            .addCase(updateUserData.rejected),
            (state, action) => {
                state.status = "update failed";
                state.error = action.payload;
            };
    },
});
export default tiaraSlice.reducer;

// const fetchUserData = async () => {
//     try {
//         console.log("fetching data");

//         const params = {
//             email: "pikachu@byom.de",
//             username: "Pikachu",
//         };

//         const res = await axios.get(
//             "https://motion.propulsion-home.ch/backend/api/users/me/",
//             {
//                 headers: {
//                     Authorization:
//                         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyOTYxMDEwLCJpYXQiOjE3MzI3ODgyMTAsImp0aSI6ImMxMzg1ZmJhZGNkZjRmMWI4MTA0MzFhODBhYzFiZmIyIiwidXNlcl9pZCI6NDEyOX0.niSBk43weT9n05jW-MDaFi_vhxAYRAqU-wz3Zi2VxVo",
//                 },
//                 params,
//             }
//         );
//         if (res.status === 200) {
//             setUser(res.data);
//         }

//         console.log("response", res.data);
//     } catch (error) {
//         console.log("error", error);
//     }
// };
