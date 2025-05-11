import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login";
import Article from "../pages/Article/Article";
import ProtectedRoute from "./ProtectedRoute";
import App from "../pages/App";
import CustomLayout from "../utils/CustomLayout";
import StaticContent from "../pages/StaticContent/StaticContent";
import ArticleHeader from "../pages/Article/container/ArticleHeader";
import Account from "../pages/Account/admin/Account";
import AdminHeader from "../pages/Account/admin/container/AdminHeader";

const routes: RouteObject[] = [
    { path: "/login", element: <LoginPage /> },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            { path: "/", element: <App /> },
            {
                path: "/accounts",
                element: <CustomLayout header={<AdminHeader />} />,
                children: [
                    { path: "admin", element: <Account /> },
                ],
            },
            {
                path: "/",
                element: <CustomLayout />,
                children: [
                    { path: "static-content", element: <StaticContent /> }
                ],
            },
            {
                path: "/",
                element: <CustomLayout header={<ArticleHeader />} />,
                children: [
                    { path: "article", element: <Article /> },
                ],
            },
        ],
    },
];

export default routes;
