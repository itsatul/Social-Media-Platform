import styled from "styled-components";
import {
  InputBoxButtonStyled,
  InputsBoxInputStyled,
  InputsBoxStyled,
  MidPartRightBoxStyled,
} from "../../../style/RightBox";

export default function MidPartLoginRightBox({ setEmail, setPassword }) {
  return (
    <MidPartRightBoxStyled>
      <h1>Sign In</h1>
      <InputsBoxStyled>
        <InputBoxButtonStyled src="src\assets\motion-assets\svgs\avatar.svg"></InputBoxButtonStyled>
        <InputsBoxInputStyled
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputsBoxStyled>
      <InputsBoxStyled>
        <InputBoxButtonStyled src="src\assets\motion-assets\svgs\password.svg"></InputBoxButtonStyled>
        <InputsBoxInputStyled
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputsBoxStyled>
      <a href="/ForgetPassword">Forget the Password?</a>
    </MidPartRightBoxStyled>
  );
}
