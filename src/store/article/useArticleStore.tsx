import { create } from 'zustand';

type ArticleType = 'modal' | 'drawer' | null;
type ArticleAction = 'update' | 'create' | 'delete' | null;

interface ArticleStoreState {
    isOpen: boolean;
    id: string;
    type: ArticleType;
    isSubmitOpen: boolean;
    isUpdating: boolean;
    updateError: string | null;
    isDelete: boolean;
    isCreate: boolean;
    action: ArticleAction;
    queryString: string;
    isChangeIndex: boolean;
    isCancelChangeIndex: boolean;

    setIsOpen: (isOpen: boolean) => void;
    setId: (id: string) => void;
    setType: (type: ArticleType) => void;
    setIsSubmitOpen: (isSubmitOpen: boolean) => void;
    setIsUpdating: (isUpdating: boolean) => void;
    setUpdateError: (updateError: string | null) => void;
    setIsDelete: (isDelete: boolean) => void;
    setIsCreate: (isCreate: boolean) => void;
    setAction: (action: ArticleAction) => void;
    setQueryString: (queryString: string) => void;
    setIsChangeIndex: (isChangeIndex: boolean) => void;
    setIsCancelChangeIndex: (isCancelChangeIndex: boolean) => void;
    openArticleDrawer: () => void;
    openArticleModal2: () => void;
    closeArticleDrawer: () => void;
    closeArticleModal: () => void;
    clearQueryString: () => void;
}

const useArticleStore = create<ArticleStoreState>((set) => ({
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

    openArticleDrawer: () => set({
        isOpen: true,
        type: "drawer"
    }),

    closeArticleDrawer: () => set({
        isOpen: false,
        type: null,
        action: null,
        id: ''
    }),

    openArticleModal2: () => set({
        isOpen: true,
        isSubmitOpen: true
    }),

    closeArticleModal: () => set({
        isSubmitOpen: false
    }),

    clearQueryString: () => set({
        queryString: ""
    })

}));

export default useArticleStore;