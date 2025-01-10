import { useSelector } from "react-redux";
import styled from "styled-components";
import { LoginrightBoxStyled } from "../../../Login/style/RightBox";
import BotPartResetPassowordCodeSentRightBox from "../../../ForgetPasswordPage/CodeSentPage/CodeSEntBox/BotcodeSentBox";
import SignUpCodeSentRightBox from "./BotcodeSentBox";


export default function SignUPCodeSentRightBox() {
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
        <h1>{document.URL.endsWith("SUcode")?'Congratulations!': "code sent!"}</h1>
        <img src="src\assets\svgs\check-mark.png" alt="" />
        <div>
          <p>{document.URL.endsWith("SUcode")?'We’ve sent a confirmation code to your email': "We’ve sent a reset code to your email"} </p>
          <p>{email}</p>
        </div>
      </CodeSentDivStyled>
      <SignUpCodeSentRightBox />
    </LoginrightBoxStyled>
  );
}
