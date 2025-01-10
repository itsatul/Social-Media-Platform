import {
    InputBoxButtonStyled,
    InputsBoxInputStyled,
    InputsBoxStyled,
    MidPartRightBoxStyled
} from "../../../Login/style/RightBox";

export default function MidPartResetPassowordRightBox({setEmail}) {

    return (
        <MidPartRightBoxStyled>
            <h1>Forgot Password</h1>
            <InputsBoxStyled>
                <InputBoxButtonStyled src="src\assets\svgs\password.svg"></InputBoxButtonStyled>
                <InputsBoxInputStyled type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </InputsBoxStyled>
        </MidPartRightBoxStyled>

    );
}