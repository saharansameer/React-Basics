import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        userLogin: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },

        userLogout: (state, action) => {
            state.status = false;
            state.userData = null;
        },  
        
    }
});

export const {userLogin, userLogout} = authSlice.actions;

export default authSlice.reducer;