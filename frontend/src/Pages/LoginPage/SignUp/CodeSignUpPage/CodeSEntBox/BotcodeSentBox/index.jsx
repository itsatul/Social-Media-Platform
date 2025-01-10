import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BotPartRightBoxStyled, SINGINButtonStyled } from "../../../../Login/style/RightBox";

export default function SignUpCodeSentRightBox() {
    const navigate=useNavigate();
   
    return (
      <BotPartRightBoxStyled>
        <SINGINButtonStyled onClick={(e)=>navigate("/SignUpVerification")}>{document.URL.endsWith("SignUpCode")?"Continue":"complete"} </SINGINButtonStyled>
        <nav>
        <NavLink to={"/none"}></NavLink>
        <NavLink to={"/SignUpCode"}></NavLink>
        <NavLink to={"/SignUpVerification"}></NavLink>
        </nav>
        
      </BotPartRightBoxStyled>
    );
  }
  