import React from "react";
import styled from "styled-components";
import {FriendRequest} from "./friendRequest";
import {Friend} from "../../domain/user/friend.domain";
import FriendListItem from "./friendListItem";

type FriendSideBarProps = {
    isOpen: boolean;
    friendRequests: Friend[];
    friends: Friend[];
}
export const FriendSideBar = (props: FriendSideBarProps) => {
    const {isOpen, friendRequests, friends} = props
    return (
        <SideMenu isOpen={isOpen}>
            <h2>Liste d'amis</h2>
            <MenuWrapper>
                <RequestWrapper>
                    <h3>Demandes d'amis</h3>
                    <RequestContainer>
                        {friendRequests && friendRequests.map((friend) => <FriendRequest username={friend.username}/>)}
                    </RequestContainer>
                </RequestWrapper>
                <FriendWrapper>
                    <h3>Amis</h3>
                    <FriendContainer>
                        {friends && friends.map((friend) => <FriendListItem username={friend.username}/>)}
                    </FriendContainer>
                </FriendWrapper>
            </MenuWrapper>
        </SideMenu>
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

const RequestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    `;

const FriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    `;

export default FriendSideBar;
