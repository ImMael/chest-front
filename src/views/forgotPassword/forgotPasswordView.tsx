import React from 'react';
import styled from "styled-components";
import ForgotPasswordViewModel from "./forgotPasswordViewModel";

const ForgotPasswordView = () => {

    const { handleForgotPassword, message } = ForgotPasswordViewModel();

    return (
        <>
            <Container>
                <ForgotPassword>
                    <Title>Mot de passe oublié</Title>
                    <ForgotPasswordForm onSubmit={handleForgotPassword}>
                        <EmailInput type="email" placeholder="Email" />
                        <ForgotPasswordButton type="submit">Envoyer</ForgotPasswordButton>
                    </ForgotPasswordForm>
                    {message && <Message>{message}</Message>}
                </ForgotPassword>
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

const ForgotPassword = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Title = styled.h1`
    margin-bottom: 20px;
`

const ForgotPasswordForm = styled.form`
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

const ForgotPasswordButton = styled.button`
    width: 80%;
    height: 30px;
    border: 1px solid #fff;
    background-color: #1b1b1b;
    margin-top: 25px;
    color: #fff;
    cursor: pointer;
`

const Message = styled.p`
    margin-top: 20px;
    color: green;
`

export default ForgotPasswordView;
