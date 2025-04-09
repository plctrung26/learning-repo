import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    isArticleDrawerOpen: boolean,
    id: string,
    type: "modal" | "drawer" | null
    isSubmitOpen: boolean
    isUpdating: boolean
    updateError: string | null
}

const initialState: UiState = {
    isArticleDrawerOpen: false,
    id: "",
    type: null,
    isSubmitOpen: false,
    isUpdating: false,
    updateError: null,
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
            state.type = "drawer"
        },
        closeArticleDrawer: (state) => {
            state.isArticleDrawerOpen = false;
            state.type = null
        },
        openArticleModal: (state, action) => {
            state.isArticleDrawerOpen = true;
            state.type = "modal"
            state.id = action.payload
        },
        closeArticleModal: (state) => {
            state.isArticleDrawerOpen = false;
            state.type = null
        },
        submit: (state) => {
            state.isSubmitOpen = true;
            state.type = "drawer"
        },
        cancelSubmit: (state) => {
            state.isSubmitOpen = false;
        },
        updateArticleData: (state, action: PayloadAction<{ id: string; data: any }>) => {
            state.isUpdating = true;
            state.updateError = null;
        },
        updateArticleDataSuccess: (state) => {
            state.isUpdating = false;
        },
        updateArticleDataFailure: (state, action) => {
            state.isUpdating = false;
            state.updateError = action.payload;
        }

    },
});

export const { updateArticleDataFailure, updateArticleDataSuccess, updateArticleData, cancelSubmit, submit, setArticleId, openArticleDrawer, closeArticleDrawer, openArticleModal, closeArticleModal } = articleDrawerSlice.actions;
export default articleDrawerSlice.reducer;
