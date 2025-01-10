import styled from "styled-components";

export const FriendCardDiv = styled.div`
  width: 362px;
  height: 489px;
  border-radius: 4px;
  padding: 30px;
  background-color: #ffffff;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const FriendImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: lightgray;
`;

export const FriendInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const FriendName = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`;

export const LikesDiv = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`;
