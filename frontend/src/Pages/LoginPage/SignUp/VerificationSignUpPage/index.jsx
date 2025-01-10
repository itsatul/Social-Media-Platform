import LoginLeftBox from "../../Login/LoginLeftPart/LoginLeft";
import {LoginPageStyled} from "../../Login/style/Login";
import SignUPVerificationRightBox from "./VerificationRightBox";


export default function SignUpVerificaitonPage() {

    return (
        <LoginPageStyled>
            <LoginLeftBox/>
            <SignUPVerificationRightBox/>
        </LoginPageStyled>
    )
}