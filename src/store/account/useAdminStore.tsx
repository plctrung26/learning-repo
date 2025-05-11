import { create } from 'zustand';
import { registerStoreReset } from '../resetStoreRegistry';

type AdminType = 'modal' | 'drawer' | null;
type AdminAction = 'update' | 'create' | 'delete' | null;

interface AdminStoreState {
    isOpen: boolean;
    id: string;
    type: AdminType;
    isSubmitOpen: boolean;
    isUpdating: boolean;
    updateError: string | null;
    isDelete: boolean;
    isCreate: boolean;
    action: AdminAction;
    queryString: string;
    isChangeIndex: boolean;
    isCancelChangeIndex: boolean;
    isOutdated: boolean;
    role: string;
    page: number
    limit: number
    total: number

    setPage: (page: number) => void;
    setLimit: (limit: number) => void;
    setTotal: (total: number) => void;
    setRole: (role: string) => void;
    setIsOpen: (isOpen: boolean) => void;
    setId: (id: string) => void;
    setType: (type: AdminType) => void;
    setIsSubmitOpen: (isSubmitOpen: boolean) => void;
    setIsUpdating: (isUpdating: boolean) => void;
    setUpdateError: (updateError: string | null) => void;
    setIsDelete: (isDelete: boolean) => void;
    setIsCreate: (isCreate: boolean) => void;
    setAction: (action: AdminAction) => void;
    setQueryString: (queryString: string) => void;
    setIsChangeIndex: (isChangeIndex: boolean) => void;
    setIsCancelChangeIndex: (isCancelChangeIndex: boolean) => void;
    setIsOutdated: (isOutdated: boolean) => void;
    openAdminDrawer: () => void;
    openAdminModal2: () => void;
    closeAdminDrawer: () => void;
    closeAdminModal: () => void;
    clearQueryString: () => void;
    reset: () => void;
}

const initialState = {
    isOpen: false,
    id: "",
    type: null,
    isSubmitOpen: false,
    isUpdating: false,
    updateError: null,
    isDelete: false,
    isCreate: false,
    action: null,
    queryString: "",
    isChangeIndex: false,
    isCancelChangeIndex: false,
    isOutdated: false,
    role: "",
    page: 1,
    limit: 25,
    total: 25,
}

const useAdminStore = create<AdminStoreState>((set) => ({
    ...initialState,
    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit }),
    setTotal: (total) => set({ total }),
    setRole: (role) => set({ role }),
    setIsOpen: (isOpen) => set({ isOpen }),
    setId: (id) => set({ id }),
    setType: (type) => set({ type }),
    setIsSubmitOpen: (isSubmitOpen) => set({ isSubmitOpen }),
    setIsUpdating: (isUpdating) => set({ isUpdating }),
    setUpdateError: (updateError) => set({ updateError }),
    setIsDelete: (isDelete) => set({ isDelete }),
    setIsCreate: (isCreate) => set({ isCreate }),
    setAction: (action) => set({ action }),
    setQueryString: (queryString) => set({ queryString }),
    setIsChangeIndex: (isChangeIndex) => set({ isChangeIndex }),
    setIsCancelChangeIndex: (isCancelChangeIndex) => set({ isCancelChangeIndex }),
    setIsOutdated: (isOutdated) => set({ isOutdated }),

    openAdminDrawer: () => set({
        isOpen: true,
        type: "drawer"
    }),

    closeAdminDrawer: () => set({
        isOpen: false,
        type: null,
        action: null,
        id: ''
    }),

    openAdminModal2: () => set({
        isOpen: true,
        isSubmitOpen: true
    }),

    closeAdminModal: () => set({
        isSubmitOpen: false
    }),

    clearQueryString: () => set({
        queryString: ""
    }),

    reset: () => set(initialState),
}));

registerStoreReset("account/admin", useAdminStore.getState().reset);

export default useAdminStore;