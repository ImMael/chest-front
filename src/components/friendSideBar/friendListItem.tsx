import styled from "styled-components";

type FriendListItemProps = {
    username: string;
}
export const FriendListItem = (props: FriendListItemProps) => {
    const {username} = props
    return (
        <FriendItemWrapper>
            <StyledName>{username}</StyledName>
        </FriendItemWrapper>
    )
}

const FriendItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80%;
    `;

const StyledName = styled.li`
    font-size: 16px;
`;


export default FriendListItem;
