type ResetFn = () => void;

const resetRegistry = new Map<string, ResetFn>();
let lastActiveModule: string | null = null;

export const registerStoreReset = (key: string, resetFn: ResetFn) => {
    resetRegistry.set(key, resetFn);
};

export const resetPreviousModule = (currentKey: string) => {
    if (lastActiveModule && lastActiveModule !== currentKey) {
        const prevReset = resetRegistry.get(lastActiveModule);
        if (prevReset) {
            prevReset();
        }
    }
    lastActiveModule = currentKey;
};
