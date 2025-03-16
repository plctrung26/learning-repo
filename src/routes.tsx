
import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";
import Account from "./Account";
import Article from "./Article";


const routes: RouteObject[] = [
    { path: "/login", element: <LoginPage /> },
    { path: "/account", element: <Account /> },
    { path: "/article", element: <Article /> }
];

export default routes;
