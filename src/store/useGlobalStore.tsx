import { create } from 'zustand';

interface GlobalStoreState {
    isLoading: boolean
    isAccessToken: boolean
    isOnTop: boolean
    forceLogout: boolean,
    setForceLogout: (val: boolean) => void,

    setLoading: (isLoading: boolean) => void
    setIsAccessToken: (isisAccessToken: boolean) => void
    setIsOnTop: (isOnTop: boolean) => void
}

const useGlobalStore = create<GlobalStoreState>((set) => ({
    isLoading: false,
    isAccessToken: false,
    isOnTop: false,
    forceLogout: false,
    setForceLogout: (val: boolean) => set({ forceLogout: val }),
    setIsOnTop: (isOnTop) => set({ isOnTop }),
    setLoading: (isLoading) => set({ isLoading }),
    setIsAccessToken: (isAccessToken) => set({ isAccessToken })
}));

export default useGlobalStore;