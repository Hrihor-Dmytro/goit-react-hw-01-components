import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  //   border: 1px solid black;

  padding: 20px;
  font-weight: bold;
  list-style: none;
`;
export const ImgList = styled.img`
  width: 50px;
`;
export const BoxList = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 15px;
`;
export const FriendsCard = styled.li`
  width: 170px;
`;
export const Status = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${props => {
    return props.isOnline ? 'red' : 'green';
  }};
`;
