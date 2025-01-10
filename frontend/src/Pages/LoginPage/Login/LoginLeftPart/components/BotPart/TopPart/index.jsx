import styled from "styled-components";
import { StoreAppStyled, StoresdivStyled, TopdivStyled } from "../../../../style/LeftBox";
import { useNavigate } from "react-router-dom";

export default function TopboxBotPartLoginLeftBox() {
const navigate = useNavigate()
  return (
    <TopdivStyled>
      <p>Connect with friends and the world around you with motion</p>
      <StoresdivStyled>
        <StoreAppStyled onClick={()=>window.open('https://www.apple.com/de/app-store/')} src="src\assets\motion-assets\svgs\apple.svg"></StoreAppStyled>
        <StoreAppStyled onClick={()=>window.open('https://play.google.com/store/games?hl=de&pli=1')} src="src\assets\motion-assets\svgs\google.svg"></StoreAppStyled>
      </StoresdivStyled>
    </TopdivStyled>
  );
}
