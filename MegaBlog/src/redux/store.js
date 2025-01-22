import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; 
import themeReducer from "../features/theme/themeSlice";
import postReducer from "../features/post/postSlice";

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (error) {
        console.log("Could not save state :",error)
    }
};

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log("Could not load state :",error)
    }
};

const persistedState = loadState();

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            theme: themeReducer,
            post: postReducer,
        },
        preloadedState: persistedState,
    }
);

store.subscribe(() => {
    saveState({
        auth: store.getState().auth,
        theme: store.getState().theme,
    })
});