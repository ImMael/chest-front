import {createBrowserRouter} from "react-router-dom";
import HomeView from "../../views/home/homeView";
import React from "react";
import LoginView from "../../views/login/loginView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/login",
        element: <LoginView />,
    }
]);

export default router;
