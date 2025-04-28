
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAccessToken = sessionStorage.getItem("access_token");

    return isAccessToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
