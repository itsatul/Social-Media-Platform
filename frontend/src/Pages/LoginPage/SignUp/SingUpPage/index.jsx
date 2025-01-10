import LoginLeftBox from "../../Login/LoginLeftPart/LoginLeft";
import { LoginPageStyled } from "../../Login/style/Login";
import SignUpRightBox from "./SingUpRightBox";

export default function SignUp (){

    return(
        <LoginPageStyled>
            <LoginLeftBox/>
            <SignUpRightBox/>
        </LoginPageStyled>
    )
}