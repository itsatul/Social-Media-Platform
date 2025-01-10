import {NavLink} from "react-router-dom";
import {BotPartRightBoxStyled, SINGINButtonStyled} from "../../../../Login/style/RightBox";


export default function BotPartSignUpRightBox() {
    return (
        <BotPartRightBoxStyled>
            <SINGINButtonStyled type="submit">SING UP </SINGINButtonStyled>
            <nav>
                <NavLink to={"/SignUp"}></NavLink>
                <NavLink to={"/ForgetPasswordCode"}></NavLink>
                <NavLink to={"/ForgetPasswordReset"}></NavLink>
            </nav>

        </BotPartRightBoxStyled>
    );
}
