import styled from "styled-components";
import { LoginrightBoxStyled } from "../../../Login/style/RightBox";
import BotPartResetPassowordRightBox from "../../ForgetPasswordPage/passwordBotPart";
import BotPartResetPassowordCodeSentRightBox from "./BotcodeSentBox";
import ForgetPasswordRightBox from "../../ForgetPasswordPage";
import { useSelector } from "react-redux";

export default function ForgetPasswordCodeSentRightBox() {
  const CodeSentDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.6rem;
    height: 80%;
    img {
      width: 5rem;
      height: 5rem;
    }
    p {
      opacity: 0.6;
      font-size: 0.9rem;
    }
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    h1{
        font-size: 2.4rem;
        font-weight: lighter;
    }
  `;

  const email=useSelector(state=> state.user.email);

  
  return (
    <LoginrightBoxStyled>
      <CodeSentDivStyled>
        <h1>Code sent!</h1>
        <img src="src\assets\svgs\check-mark.png" alt="" />
        <div>
          <p>We’ve sent a reset code to your email </p>
          <p>{email}</p>
        </div>
      </CodeSentDivStyled>
      <BotPartResetPassowordCodeSentRightBox />
    </LoginrightBoxStyled>
  );
}
