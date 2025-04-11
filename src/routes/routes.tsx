import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login";
import Article from "../pages/Article/Article";
import ProtectedRoute from "./ProtectedRoute";
import App from "../pages/App";
import CustomLayout from "../utils/CustomLayout";
import Account from "../pages/Account";
import StaticContent from "../pages/StaticContent/StaticContent";

const routes: RouteObject[] = [
    { path: "/login", element: <LoginPage /> },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            { path: "/", element: <App /> },
            {
                path: "/",
                element: <CustomLayout />,
                children: [
                    { path: "article", element: <Article /> },
                    { path: "account", element: <Account /> },
                    { path: "static-content", element: <StaticContent /> }
                ],
            },
        ],
    },
];

export default routes;
