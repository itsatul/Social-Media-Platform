import {
    InputBoxButtonStyled,
    InputsBoxInputStyled,
    InputsBoxStyled,
    MidPartRightBoxStyled,
} from "../../../../Login/style/RightBox";

export default function MidPartSignUpRightBox({setEmail}) {
    return (
        <MidPartRightBoxStyled>
            <h1>Sign up</h1>
            <a href="/ForgetPassword">Forget the Password?</a>
            <InputsBoxStyled>
                <InputBoxButtonStyled src="src\assets\motion-assets\svgs\avatar.svg"></InputBoxButtonStyled>
                <InputsBoxInputStyled
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputsBoxStyled>
        </MidPartRightBoxStyled>
    );
}
