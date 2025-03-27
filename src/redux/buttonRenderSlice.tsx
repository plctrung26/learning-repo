import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDrawerOpen: false,
};

const buttonRenderSlice = createSlice({
    name: "button-render",
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isDrawerOpen = true;
        },
        closeDrawer: (state) => {
            state.isDrawerOpen = false;
        },
    },
});

export const { openDrawer, closeDrawer } = buttonRenderSlice.actions;
export default buttonRenderSlice.reducer;
