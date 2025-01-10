import { NavLink, useNavigate } from "react-router-dom";
import { BotPartRightBoxStyled, SINGINButtonStyled } from "../../../../Login/style/RightBox";

export default function BotSignUpVerificationRightBox() {
    const navigate=useNavigate();
   
    return (
      <BotPartRightBoxStyled>
        <SINGINButtonStyled type="submit">Complete </SINGINButtonStyled>
        <nav>
        <NavLink to={"/ForgetPassword"}></NavLink>
        <NavLink to={"/SignUpCode"}></NavLink>
        <NavLink to={"/SignUpVerification"}></NavLink>
        </nav>
        
      </BotPartRightBoxStyled>
    );
  }
  