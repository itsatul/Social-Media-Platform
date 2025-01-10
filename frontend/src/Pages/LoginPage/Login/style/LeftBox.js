import background_image from "../../../../assets/motion-assets/images/background_image.png";
import styled from "styled-components";

export const LoginLeftBoxStyled = styled.div`
  width: 45%;
  height: 100%;
  background-color: #683cd1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-image: url(${background_image});
  background-size: cover;
`;

export const TopPartLoginLeftBoxStyled = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  img {
    height: 6rem;
  }
  h1 {
    font-size: 2.6rem;
  }
`;

export const BotPartLoginLeftBoxStyled = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const TopdivStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  justify-content: flex-start;
  gap: 3rem;
  width: 45%;
  flex-grow: 1;
  align-self: center;
  p {
    font-size: 1rem;
    text-align: center;
    opacity: 0.6;
  }
`;
export const StoresdivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;
export const StoreAppStyled = styled.img`
  border: solid 1px #a8a8a8;
  padding: 6px;
  border-radius: 2rem;
  height: 2.4rem;
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: black;
    color: white;
  }
`;

export const BotdivStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-between;
  p {
    opacity: 0.6;
  }
`;
export const SocialLinkStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const SocialIconStyled = styled.img`
  border-radius: 5px;
  width: 3rem;
  height: 3rem;
  opacity: 0.6;
  &:hover{
    opacity: 1;
  }
`;
