import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";
import Account from "./Account";
import Article from "./Article";
import App from "./App";


const routes: RouteObject[] = [
    { path: "/", element: <App /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/account", element: <Account /> },
    { path: "/article", element: <Article /> }
];

export default routes;
