import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";
import Account from "./Account";
import Article from "./Article";
import App from "./App";
import CustomLayout from "./CustomLayout";


const routes: RouteObject[] = [
    { path: "/", element: <App /> },
    { path: "/login", element: <LoginPage /> },
    {
        path: "/", element: <CustomLayout />, children: [
            { path: '/article', element: <Article /> },
            { path: "/account", element: <Account /> }
        ]
    }
];

export default routes;
