import {NavLink} from "react-router-dom";
import {BotPartRightBoxStyled, SINGINButtonStyled} from "../../../Login/style/RightBox";

export default function BotPartResetPassowordRightBox() {
    return (
        <BotPartRightBoxStyled>
            <SINGINButtonStyled type="submit">SEND CODE </SINGINButtonStyled>
            <nav>
                <NavLink to={"/ForgetPassword"}></NavLink>
                <NavLink to={"/ForgetPasswordCode"}></NavLink>
                <NavLink to={"/ForgetPasswordReset"}></NavLink>
            </nav>

        </BotPartRightBoxStyled>
    );
}
