import { create } from 'zustand';

interface GlobalStoreState {
    isLoading: boolean
    isAccessToken: boolean
    isOnTop: boolean

    setLoading: (isLoading: boolean) => void
    setIsAccessToken: (isisAccessToken: boolean) => void
    setIsOnTop: (isOnTop: boolean) => void
}

const useGlobalStore = create<GlobalStoreState>((set) => ({
    isLoading: false,
    isAccessToken: false,
    isOnTop: false,
    setIsOnTop: (isOnTop) => set({ isOnTop }),
    setLoading: (isLoading) => set({ isLoading }),
    setIsAccessToken: (isAccessToken) => set({ isAccessToken })
}));

export default useGlobalStore;