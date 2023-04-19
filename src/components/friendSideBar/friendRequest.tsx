import styled from "styled-components";

type FriendRequestProps = {
    username: string;
}

export const FriendRequest = (props: FriendRequestProps) => {
    const {username} = props
    return (
        <FriendRequestWrapper>
            <StyledName>{username}</StyledName>
            <ButtonContainer>
                <AcceptButton>Accepter</AcceptButton>
                <RefuseButton>Refuser</RefuseButton>
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

