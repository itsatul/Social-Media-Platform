import styled from "styled-components";
import TopPartLoginLeftBox from "./components/TopPart";
import BotPartLoginLeftBox from "./components/BotPart";
import { LoginLeftBoxStyled } from "../style/LeftBox";


export default function LoginLeftBox() {

  return (
    <LoginLeftBoxStyled>
      <TopPartLoginLeftBox />
      <BotPartLoginLeftBox />
    </LoginLeftBoxStyled>
  );
}
