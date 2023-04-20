import styled from "styled-components";
import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export const Modal = (props: ModalProps) => {
    const {isOpen, onClose, children} = props;
    return (
        <ModalContainer isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                {children}
            </ModalContent>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display: ${(props: { isOpen: boolean }) => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1b1b1b;
    color: white;
    width: 50%;
    height: 50%;
    border-radius: 10px;
`;

const CloseButton = styled.button`
    background-color: #1b1b1b;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    cursor: pointer;
`;

export default Modal;
