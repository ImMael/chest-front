import React from 'react';
import styled from "styled-components";
import RegisterViewModel from "./registerViewModel";

const RegisterView = () => {

    const { register } = RegisterViewModel();

    return (
        <>
            <Container>
                <Register>
                    <Title>Inscription</Title>
                    <RegisterForm onSubmit={register}>
                        <UsernameInput type="text" placeholder="Username" />
                        <EmailInput type="email" placeholder="Email" />
                        <PasswordInput type="password" placeholder="Password" />
                        <RegisterButton type="submit">S'inscrire</RegisterButton>
                    </RegisterForm>
                </Register>
            </Container>
        </>
    );
};

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

const Register = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const UsernameInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const EmailInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const PasswordInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const RegisterButton = styled.button`
    width: 80%;
    height: 30px;
    background-color: #1b1b1b;
    color: #fff;
    border: 1px solid #fff;
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export default RegisterView;
