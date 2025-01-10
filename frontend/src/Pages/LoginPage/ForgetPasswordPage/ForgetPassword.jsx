import LoginLeftBox from "../Login/LoginLeftPart/LoginLeft";
import ForgetPasswordRightBox from "./ForgetPasswordPage";
import {LoginPageStyled} from "../Login/style/Login"

export default function ForgotPassoword() {

    return (
        <LoginPageStyled>
            <LoginLeftBox/>
            <ForgetPasswordRightBox/>
        </LoginPageStyled>
    )
}