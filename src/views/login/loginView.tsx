import React from "react";
import LoginViewModel from "./loginViewModel";

import styled from "styled-components";
import {Link} from "react-router-dom";
export const LoginView = () => {

    const { login } = LoginViewModel()

    return (
        <>
            <Container>
                <Login>
                    <Title>Connexion</Title>
                    <LoginForm onSubmit={login}>
                        <EmailInput type="email" placeholder="Email" />
                        <PasswordInput type="password" placeholder="Password" />
                        <LoginButton type="submit">Se connecter</LoginButton>
                        <ForgotPasswordLink to="/forgot-password">Mot de passe oublié ?</ForgotPasswordLink>
                    </LoginForm>
                    <NoAccountText>Pas encore de compte ? <RegisterLink to="/register">S'inscrire</RegisterLink> </NoAccountText>
                </Login>
            </Container>
        </>
    )
}

const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      background-color: #1b1b1b;
      color: #ffffff;
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Title = styled.h1`
    margin-bottom: 20px;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 1px solid #fff;
    border-radius: 5px;
`

const EmailInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`

const PasswordInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`

const LoginButton = styled.button`
    width: 80%;
    height: 30px;
    background-color: #1b1b1b;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    cursor: pointer;
`

const ForgotPasswordLink = styled(Link)`
    margin-top: 10px;
    text-decoration: none;
    color: #178cdc;
`

const NoAccountText = styled.p`
    margin-top: 10px;
`

const RegisterLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #178cdc;
`

export default LoginView
