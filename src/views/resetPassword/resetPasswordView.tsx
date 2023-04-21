import React from 'react';
import styled from "styled-components";
import ResetPasswordViewModel from "./resetPasswordViewModel";

const ResetPasswordView = () => {

    const { handleResetPassword } = ResetPasswordViewModel();

    return (
        <>
            <Container>
                <ResetPassword>
                    <Title>Mot de passe oublié</Title>
                    <ResetPasswordForm onSubmit={handleResetPassword}>
                        <NewPasswordInput type="password" placeholder="Nouveau mot de passe" />
                        <ConfirmPasswordInput type="password" placeholder="Confirmer le mot de passe" />
                        <ResetPasswordButton type="submit">Envoyer</ResetPasswordButton>
                    </ResetPasswordForm>
                </ResetPassword>
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

const ResetPassword = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const ResetPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const NewPasswordInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 15px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const ConfirmPasswordInput = styled.input`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const ResetPasswordButton = styled.button`
    padding: 0 10px;
    width: 80%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    margin-top: 25px;
    background-color: #1b1b1b;
    color: #fff;
`;

export default ResetPasswordView;
