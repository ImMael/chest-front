import React from "react";
import LoginViewModel from "./loginViewModel";
export const LoginView = () => {

    const { login } = LoginViewModel()

    return (
        <>
            <button onClick={login}>Loggin</button>
        </>
    )
}

export default LoginView
