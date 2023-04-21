import styled from "styled-components";
import {useEffect, useState} from "react";
import {useAuth} from "../auth/AuthContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

type FriendRequestProps = {
    username: string;
    email: string
}

export const FriendRequest = (props: FriendRequestProps) => {
    const {username, email} = props

    const [decodedToken, setDecodedToken] = useState<any>({});

    const {token} = useAuth();

    useEffect(() => {
        if (!token) return;
        setDecodedToken(jwtDecode(token));
    }, [token])

    const getUserData = async () => {
        const email = decodedToken.email;
        const user = await axios.get(`http://localhost:3000/users/me/${email}`)
        return user.data;
    }

    const acceptFriendRequest = async () => {
        const user = await getUserData();
        console.log(email)
        await axios.post(`http://localhost:3000/users/accept-friend-request`, {
            email: email,
            me: user.email,
        })
    }

    const declineFriendRequest = async () => {
        const user = await getUserData();
        await axios.post(`http://localhost:3000/users/decline-friend-request`, {
            me: user.email,
            email: email,
        })
    }

    return (
        <FriendRequestWrapper>
            <StyledName>{username}</StyledName>
            <ButtonContainer>
                <AcceptButton onClick={acceptFriendRequest} >Accepter</AcceptButton>
                <RefuseButton onClick={declineFriendRequest}>Refuser</RefuseButton>
            </ButtonContainer>
        </FriendRequestWrapper>
    )
}

const FriendRequestWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 80%;
    `;

const StyledName = styled.p`
    font-size: 16px;
    margin-right: 5px;
    `;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  gap: 10px;
  `;


const commonButtonStyle = styled.button`
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

const AcceptButton = styled(commonButtonStyle)`
  background-color: #204f77;
`;

const RefuseButton = styled(commonButtonStyle)`
    background-color: #c0392b;
`;

export default FriendRequest;

