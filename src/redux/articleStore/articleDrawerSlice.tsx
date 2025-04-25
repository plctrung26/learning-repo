import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    isArticleDrawerOpen: boolean,
    id: string,
    type: "modal" | "drawer" | null
    isSubmitOpen: boolean
    isUpdating: boolean
    updateError: string | null
    isDelete: boolean
    isCreate: boolean
    action: "update" | "create" | "delete" | null
}

const initialState: UiState = {
    isArticleDrawerOpen: false,
    id: "",
    type: null,
    isSubmitOpen: false,
    isUpdating: false,
    updateError: null,
    isDelete: false,
    isCreate: false,
    action: null
};

const articleDrawerSlice = createSlice({
    name: "Article drawer",
    initialState,
    reducers: {
        setArticleId: (state, action) => {
            state.id = action.payload;
        },
        openUpdateArticleDrawer: (state) => {
            state.isArticleDrawerOpen = true;
            state.type = "drawer"
            state.action = "update"
        },
        closeUpdateArticleDrawer: (state) => {
            state.isArticleDrawerOpen = false;
            state.type = null
            state.action = null
        },
        openCreateArticleDrawer: (state) => {
            state.isArticleDrawerOpen = true;
            state.type = "drawer"
            state.action = "create"
        },
        closeCreateArticleDrawer: (state) => {
            state.isArticleDrawerOpen = false;
            state.type = null
            state.action = null
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
        updateArticleData: (state, _action: PayloadAction<{ id: string; data: any }>) => {
            state.isUpdating = true;
            state.updateError = null;
        },
        updateArticleDataSuccess: (state) => {
            state.isUpdating = false;
        },
        updateArticleDataFailure: (state, action) => {
            state.isUpdating = false;
            state.updateError = action.payload;
        },
        confirmDelete: (state, _action: PayloadAction<{ ids: string[] }>) => {
            state.isDelete = true
        },
        deleteArticleDataSuccess: (state) => {
            state.isDelete = false
        },
        deleteArticleDataFailure: (state, action) => {
            state.isDelete = false
            state.updateError = action.payload;
        },

    },
});

export const { closeCreateArticleDrawer, openCreateArticleDrawer, deleteArticleDataFailure, deleteArticleDataSuccess, confirmDelete, updateArticleDataFailure, updateArticleDataSuccess, updateArticleData, cancelSubmit, submit, setArticleId, openUpdateArticleDrawer, closeUpdateArticleDrawer, openArticleModal, closeArticleModal } = articleDrawerSlice.actions;
export default articleDrawerSlice.reducer;
