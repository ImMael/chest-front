import React from 'react'
import ReactDOM from 'react-dom/client'
import {AuthProvider} from "./components/auth/AuthContext";
import {RouterProvider} from "react-router-dom";
import router from "./components/router/router";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>
)
