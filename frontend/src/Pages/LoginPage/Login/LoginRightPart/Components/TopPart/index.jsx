import {SignUpButtonWhiteStyled, TopPartRightBoxStyled} from "../../../style/RightBox";
import {useNavigate} from "react-router-dom";

export default function TopPartLoginRightBox() {
    const navigate = useNavigate();

    return (
        <TopPartRightBoxStyled>
            <a href="">Dont Have account?</a>
            <SignUpButtonWhiteStyled onClick={() => navigate("/SignUp")}>SING UP</SignUpButtonWhiteStyled>
        </TopPartRightBoxStyled>
    );
}
