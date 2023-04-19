import React, {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../components/auth/AuthContext";
import homeViewModel from "./homeViewModel";
import styled from "styled-components";
export const HomeView: FC = () => {
    const { test, isMenuOpen, setIsMenuOpen } = homeViewModel();

    return (
        <>
            <SideMenu isOpen={isMenuOpen}>
                <h2>Liste d'amis</h2>
                <MenuWrapper>
                    <RequestWrapper>
                        <h3>Demandes d'amis</h3>
                    </RequestWrapper>
                    <FriendWrapper>
                        <h3>Amis</h3>
                    </FriendWrapper>
                </MenuWrapper>
            </SideMenu>
            <Container menuOpen={isMenuOpen}>
                <Wrapper>
                    <Header>
                        <h1>Home</h1>
                    </Header>
                    <ContentContainer>
                        <ContentWrapper>
                            <StyledButton onClick={test}>Créer une partie privée</StyledButton>
                            <StyledButton onClick={test}>Créer une partie publique</StyledButton>
                            <StyledButton onClick={test}>Rejoindre une partie publique</StyledButton>
                            <StyledButton onClick={test}>Rejoindre une partie privée</StyledButton>
                        </ContentWrapper>
                    </ContentContainer>
                    <FooterContainer>
                        <FooterWrapper>
                            <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? "> Liste d'amis" : "< Liste d'amis"}</StyledButton>
                        </FooterWrapper>
                    </FooterContainer>
                </Wrapper>
            </Container>
        </>
    )
}

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
  background-color: #3d3d3d;
  transform: translateX(${(props: { isOpen: boolean }) => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  display:flex;
  flex-direction: column;
  align-items: center;
  color:white;
  padding-top: 20px;
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const RequestWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;

const FriendWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1b1b1b;
    color:white;
  transform: translateX(${(props: { menuOpen: boolean }) => props.menuOpen ? '0' : '300px'});
    transition: transform 0.3s ease-in-out;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
    `;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 90%;
    width: 100%;
    `;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
    width: 100%;
    `;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
    `;

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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





export default HomeView;
