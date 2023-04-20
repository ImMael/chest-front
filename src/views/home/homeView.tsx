import React, {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../components/auth/AuthContext";
import homeViewModel from "./homeViewModel";
import styled from "styled-components";
import FriendSideBar from "../../components/friendSideBar/friendSideBar";
import {PowerOutline} from "react-ionicons";
import LogoutModal from "../../components/logout/logoutModal";
export const HomeView: FC = () => {
    const {
        test,
        handleLogout,
        openLogoutModal,
        isMenuOpen,
        setIsMenuOpen,
        friendRequests,
        friends,
        isLogoutModalOpen,
        setIsLogoutModalOpen } = homeViewModel();

    return (
        <>
            <FriendSideBar isOpen={isMenuOpen} friendRequests={friendRequests} friends={friends}/>
            <Container menuOpen={isMenuOpen}>
                {isLogoutModalOpen && <LogoutModal setIsLogoutModalOpen={setIsLogoutModalOpen}/>}
                <Wrapper>
                    <Header>
                        <h1>Home</h1>
                        <LogoutButton
                            color={'red'}
                            height="30px"
                            width="30px"
                            onClick={() => openLogoutModal()}
                        />
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

const LogoutButton = styled(PowerOutline)`
    position: absolute;
    right: 60px;
    top: 20px;
    cursor: pointer;
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
