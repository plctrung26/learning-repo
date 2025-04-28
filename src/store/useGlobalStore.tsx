import { create } from 'zustand';

interface GlobalStoreState {
    isLoading: boolean
    isAccessToken: boolean

    setLoading: (isLoading: boolean) => void
    setIsAccessToken: (isisAccessToken: boolean) => void
}

const useGlobalStore = create<GlobalStoreState>((set) => ({
    isLoading: false,
    isAccessToken: false,
    setLoading: (isLoading) => set({ isLoading }),
    setIsAccessToken: (isAccessToken) => set({ isAccessToken })
}));

export default useGlobalStore;