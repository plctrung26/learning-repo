import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isArticleDrawerOpen: false,
    id: ""
};

const articleDrawerSlice = createSlice({
    name: "Article drawer",
    initialState,
    reducers: {
        setArticleId: (state, action) => {
            state.id = action.payload;
        },
        openArticleDrawer: (state) => {
            state.isArticleDrawerOpen = true;
        },
        closeArticleDrawer: (state) => {
            state.isArticleDrawerOpen = false;
        },
    },  
});

export const { setArticleId, openArticleDrawer, closeArticleDrawer } = articleDrawerSlice.actions;
export default articleDrawerSlice.reducer;
