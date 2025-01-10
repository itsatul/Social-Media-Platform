import LoginLeftBox from "../../Login/LoginLeftPart/LoginLeft";
import {LoginPageStyled} from "../../Login/style/Login";
import ForgetPasswordCodeSentRightBox from "./CodeSEntBox";

export default function ForgotPassowordSentCodePage() {

    return (
        <LoginPageStyled>
            <LoginLeftBox/>
            <ForgetPasswordCodeSentRightBox/>
        </LoginPageStyled>
    )
}