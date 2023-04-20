import {createBrowserRouter} from "react-router-dom";
import HomeView from "../../views/home/homeView";
import React from "react";
import LoginView from "../../views/login/loginView";
import RegisterView from "../../views/register/registerView";
import LobbyView from "../../views/game/lobby/lobbyView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/login",
        element: <LoginView />,
    },
    {
        path: "/lobby",
        element: <LobbyView />,
    },
    {
        path: "/register",
        element: <RegisterView />,
    }
]);

export default router;
