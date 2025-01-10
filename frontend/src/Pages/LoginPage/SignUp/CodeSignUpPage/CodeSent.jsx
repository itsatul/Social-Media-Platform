import LoginLeftBox from "../../Login/LoginLeftPart/LoginLeft";
import {LoginPageStyled} from "../../Login/style/Login";
import SignUPCodeSentRightBox from "./CodeSEntBox";


export default function SignUpSentCodePage() {

    return (
        <LoginPageStyled>
            <LoginLeftBox/>
            <SignUPCodeSentRightBox/>
        </LoginPageStyled>
    )
}