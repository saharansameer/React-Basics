import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeMode: "dark"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleThemeMode: (state, action) => {
            state.themeMode = action.payload;
        }
    }
});

export const {toggleThemeMode} = themeSlice.actions;

export default themeSlice.reducer;