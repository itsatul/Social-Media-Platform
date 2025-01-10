import LoginLeftBox from "./LoginLeftPart/LoginLeft";
import LoginRightBox from "./LoginRightPart/LoginRight";
import {LoginPageStyled} from "./style/Login";

export default function LoginPage() {


    return (
        //hi
        <LoginPageStyled>
            <LoginLeftBox/>
            <LoginRightBox/>
        </LoginPageStyled>
    )
}