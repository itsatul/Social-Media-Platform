import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BotPartRightBoxStyled, SINGINButtonStyled } from "../../../../Login/style/RightBox";

export default function BotPartResetPassowordCodeSentRightBox() {
    const navigate=useNavigate();
   
    return (
      <BotPartRightBoxStyled>
        <SINGINButtonStyled onClick={(e)=>navigate("/ForgetPasswordReset")}>Continue </SINGINButtonStyled>
        <nav>
        <NavLink to={"/ForgetPassword"}></NavLink>
        <NavLink to={"/ForgetPasswordCode"}></NavLink>
        <NavLink to={"/aa"}></NavLink>
        </nav>
        
      </BotPartRightBoxStyled>
    );
  }
  