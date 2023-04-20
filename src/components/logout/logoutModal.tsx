import React from 'react';
import homeViewModel from "../../views/home/homeViewModel";
import styled from "styled-components";
import PropTypes from "prop-types";

interface Props {
    setIsLogoutModalOpen: (isLogoutModalOpen: boolean) => void;
}

const LogoutModal = ({ setIsLogoutModalOpen }: Props) => {
    const { handleLogout } = homeViewModel();
    return (
        <>
            <ModalContainer onClick={() => setIsLogoutModalOpen(false)}>
                <Modal>
                    <ModalHeader>
                        <ModalTitle>Logout</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <ModalText>Are you sure you want to logout?</ModalText>
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton onClick={handleLogout}>Logout</ModalButton>
                        <ModalButton onClick={() => setIsLogoutModalOpen(false)}>Cancel</ModalButton>
                    </ModalFooter>
                </Modal>
            </ModalContainer>
        </>
    );
};

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    width: 400px;
    height: 200px;
    background-color: #1b1b1b;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalTitle = styled.h1`
    color: #ffffff;
`;

const ModalBody = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalText = styled.p`
    color: #ffffff;
`;

const ModalFooter = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ModalButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #1b1b1b;
    border: 1px solid #ffffff;
    color: #ffffff;
    cursor: pointer;
`;

export default LogoutModal;
