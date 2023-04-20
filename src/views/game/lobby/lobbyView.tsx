import React from 'react';
import {lobbyViewModel} from "./lobbyViewModel";
import styled from "styled-components";

export const LobbyView = () => {
    const { isPublic, returnHome, users } = lobbyViewModel();

    console.log(isPublic)

    return (
        <>
            <LobbyContainer>
            <h1>Lobby</h1>
                <LobbyWrapper>
                    <LobbyHeader>
                        <h1>{`Partie ${isPublic ? "publique" : "privée"}`}</h1>
                        {users.length < 2 && <h3>En attente d'un autre joueur...</h3>}
                    </LobbyHeader>
                    <LobbyContent>
                        <LobbyContentWrapper>
                            <UserList>
                                {users.map((user, index) => (
                                    <li key={index}>{user.name}</li>
                                ))}
                            </UserList>
                        </LobbyContentWrapper>
                        <LobbyFooter>
                            <LobbyFooterWrapper>
                                <Buttons>
                                    <StyledButton onClick={() => {}}>Lancer la partie</StyledButton>
                                    <StyledButton onClick={returnHome}>Quitter la partie</StyledButton>
                                </Buttons>
                            </LobbyFooterWrapper>
                        </LobbyFooter>
                    </LobbyContent>
                </LobbyWrapper>
            </LobbyContainer>
        </>
    )
}

const LobbyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    color:white;
    background-color: #1b1b1b;
`;

const LobbyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const LobbyHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
`;

const LobbyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100%;
`;

const LobbyContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const UserList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const LobbyFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
`;

const LobbyFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
`;

const StyledButton = styled.button`
    padding: 10px;
    background-color: #1b1b1b;
    width: 300px;
    border: 1px solid #ffffff;
    color: #ffffff;
    cursor: pointer;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    height: 100%;
    width: 50%;
`;

const Countdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
`;

export default LobbyView
