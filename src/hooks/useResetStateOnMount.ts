
import { useEffect } from "react";
import { resetPreviousModule } from "../store/resetStoreRegistry";

const useResetStateOnMount = (moduleKey: string) => {
    useEffect(() => {
        resetPreviousModule(moduleKey);
        console.log(moduleKey)
    }, [moduleKey]);
};

export default useResetStateOnMount;
