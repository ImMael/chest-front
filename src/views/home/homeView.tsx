import React, {FC, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../components/auth/AuthContext";
import homeViewModel from "./homeViewModel";
import styled from "styled-components";
import FriendSideBar from "../../components/friendSideBar/friendSideBar";
import Modal from "../../components/modal/modal";
import {PowerOutline} from "react-ionicons";
import LogoutModal from "../../components/logout/logoutModal";
export const HomeView: FC = () => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        friendRequests,
        friends,
        openModal,
        setOpenModal,
        createLobby,
        handleLogout,
        openLogoutModal,
        isLogoutModalOpenn
        setIsLogoutModalOpen,
    } = homeViewModel();

    return (
        <>
            <FriendSideBar isOpen={isMenuOpen} friendRequests={friendRequests} friends={friends} openModal={() => setOpenModal(true)}/>
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
                            <StyledButton onClick={() => createLobby(false)}>Créer une partie privée</StyledButton>
                            <StyledButton onClick={() => createLobby(true)}>Créer une partie publique</StyledButton>
                            <StyledButton onClick={() => {}}>Rejoindre une partie publique</StyledButton>
                            <StyledButton onClick={() => {}}>Rejoindre une partie privée</StyledButton>
                        </ContentWrapper>
                    </ContentContainer>
                    <FooterContainer>
                        <FooterWrapper>
                            <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? "> Liste d'amis" : "< Liste d'amis"}</StyledButton>
                        </FooterWrapper>
                    </FooterContainer>
                </Wrapper>
            </Container>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <ModalContainer>
                    <ModalWrapper>
                        <ModalHeader>
                            <h1>Ajouter un ami</h1>
                        </ModalHeader>
                        <ModalContent>
                            <ModalContentWrapper>
                                <Input type="text" placeholder="Nom d'utilisateur"/>
                            </ModalContentWrapper>
                        </ModalContent>
                        <ModalFooter>
                            <ModalFooterWrapper>
                                <ValidButton onClick={() => setOpenModal(false)}>Ajouter</ValidButton>
                                <AbortButton onClick={() => setOpenModal(false)}>Annuler</AbortButton>
                            </ModalFooterWrapper>
                        </ModalFooter>
                    </ModalWrapper>
                </ModalContainer>
            </Modal>
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

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: #ffffff;
    `;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;
    background-color: #1b1b1b;
    `;

const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
    `;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100%;
    `;

const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    `;

const Input = styled.input`
    padding: 10px;
    background-color: #1b1b1b;
    width: 300px;
    border: 1px solid #ffffff;
    color: #ffffff;
    `;

const ModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
    `;

const ModalFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
    width: 100%;
    `;

const ValidButton = styled(StyledButton)`
  background-color: #55881b;
  border: 1px solid #55881b;
`;
const AbortButton = styled(StyledButton)`
  background-color: #a23333;
  border: 1px solid #a23333;
`;






export default HomeView;
