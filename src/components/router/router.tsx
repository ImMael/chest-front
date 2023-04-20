import {createBrowserRouter} from "react-router-dom";
import HomeView from "../../views/home/homeView";
import React from "react";
import LoginView from "../../views/login/loginView";
import BoardView from "../../views/board/boardView";
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
        path: "/game",
        element: <BoardView />,
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
