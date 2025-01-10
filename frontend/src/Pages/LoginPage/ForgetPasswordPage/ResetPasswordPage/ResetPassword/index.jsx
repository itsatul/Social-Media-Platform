import { useState } from "react";
import TopPartLoginRightBox from "../../../Login/LoginRightPart/Components/TopPart";
import { LoginrightBoxStyled } from "../../../Login/style/RightBox";
import BotPartResetPassowordRightBox from "../../ForgetPasswordPage/passwordBotPart";
import { ForgetPasswordFormStyled } from "../../style";
import MidPartResetPassowordRightBoxAfter from "./MidPart";
import { useSelector } from "react-redux";
import { api } from "../../../../../config";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordRightBox() {
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const email=useSelector(state=> state.user.email);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleRegisterValidation = async (e) => {
    e.preventDefault();
    setLoginError("");
    // console.log(password);
    // console.log(ConfirmPassword);
    // console.log(code);
    // console.log(email);
    try {
      const res = await api.patch("/auth/password-reset/validation/", {
        code: code,
        email: email,
        password: password,
        password_repeat: ConfirmPassword,
      });
      
      navigate("/Login");
    } catch (error) {
      setLoginError("Fild the field Again");
    }
  };

  return (
    <LoginrightBoxStyled>
      <TopPartLoginRightBox />
      <ForgetPasswordFormStyled onSubmit={(e) => handleRegisterValidation(e)}>
        <MidPartResetPassowordRightBoxAfter
          password={(e) => setPassword(e)}
          ConfirmPassword={(e) => setConfirmPassword(e)}
          code={(e) => setCode(e)}
        />
        <BotPartResetPassowordRightBox />
      </ForgetPasswordFormStyled>
    </LoginrightBoxStyled>
  );
}
