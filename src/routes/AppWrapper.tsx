import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../store/useGlobalStore";

type AppWrapperProps = {
    children: ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
    const navigate = useNavigate();
    const forceLogout = useGlobalStore(state => state.forceLogout);
    const setForceLogout = useGlobalStore(state => state.setForceLogout);

    useEffect(() => {
        if (forceLogout) {
            sessionStorage.clear();
            navigate("/login", { replace: true });
            setForceLogout(false);
        }
    }, [forceLogout, navigate]);

    return <>{children}</>;
};

export default AppWrapper;
