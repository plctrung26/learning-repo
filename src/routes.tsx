import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";
import Account from "./Account";
import Article from "./Article";
import CustomLayout from "./CustomLayout";
import StaticContent from "./StaticContent";
import ProtectedRoute from "./ProtectedRoute";
import App from "./App"; // The homepage without layout

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
