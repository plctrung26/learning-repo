import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login";
import Article from "../pages/Article/Article";
import ProtectedRoute from "./ProtectedRoute";
import App from "../pages/App";
import CustomLayout from "../utils/CustomLayout";
import Account from "../pages/Account";
import StaticContent from "../pages/StaticContent/StaticContent";
import ArticleHeader from "../pages/Article/container/ArticleHeader";

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
                    { path: "account", element: <Account /> },
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
