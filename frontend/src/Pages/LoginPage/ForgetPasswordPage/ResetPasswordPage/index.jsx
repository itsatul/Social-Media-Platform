import LoginLeftBox from "../../Login/LoginLeftPart/LoginLeft";
import { LoginPageStyled } from "../../Login/style/Login";
import ForgetPasswordRightBox from "../ForgetPasswordPage";
import ResetPasswordRightBox from "./ResetPassword";


export default function ResetPassoword (){

    return(
        <LoginPageStyled>
            <LoginLeftBox/>
            <ResetPasswordRightBox/>
        </LoginPageStyled>
    )
}