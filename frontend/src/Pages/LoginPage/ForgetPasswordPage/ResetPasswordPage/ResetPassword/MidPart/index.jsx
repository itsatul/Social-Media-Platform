import {
    InputBoxButtonStyled,
    InputsBoxInputStyled,
    InputsBoxStyled,
    MidPartRightBoxStyled,
} from "../../../../Login/style/RightBox";

export default function MidPartResetPassowordRightBoxAfter({
                                                               password,
                                                               ConfirmPassword,
                                                               code,
                                                           }) {
    return (
        <MidPartRightBoxStyled>
            <h1>Reset Password</h1>
            <InputsBoxStyled>
                <InputBoxButtonStyled src="src\assets\motion-assets\svgs\password.svg"></InputBoxButtonStyled>
                <InputsBoxInputStyled
                    type="password"
                    placeholder="Password"
                    onChange={(e) => password(e.target.value)}
                />
            </InputsBoxStyled>
            <InputsBoxStyled>
                <InputBoxButtonStyled src="src\assets\motion-assets\svgs\password.svg"></InputBoxButtonStyled>
                <InputsBoxInputStyled
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => ConfirmPassword(e.target.value)}
                />
            </InputsBoxStyled>
            <InputsBoxStyled>
                <InputBoxButtonStyled src="src\assets\svgs\notification_bell.svg"></InputBoxButtonStyled>
                <InputsBoxInputStyled
                    type="text"
                    placeholder="Verfication code"
                    onChange={(e) => code(e.target.value)}
                />
            </InputsBoxStyled>
        </MidPartRightBoxStyled>
    );
}
