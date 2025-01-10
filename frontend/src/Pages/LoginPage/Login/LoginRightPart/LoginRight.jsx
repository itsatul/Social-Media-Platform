import styled from "styled-components";
import TopPartLoginRightBox from "./Components/TopPart";
import MidPartLoginRightBox from "./Components/MiddlePart";
import BotPartLoginRightBox from "./Components/BotPart";
import { LoginrightBoxStyled } from "../style/RightBox";
import { ForgetPasswordFormStyled } from "../../ForgetPasswordPage/style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../config";
import { login } from "../../../../store/slice/user";

export default function LoginRightBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await api.post("/auth/token/", {
        email: email,
        password: password,
      });
      const { access } = res.data;
      console.log(access);
      // dispathc if
      if (access) {
        dispatch(login(access));
        navigate("/Main");
        localStorage.setItem("accessToken", access);
      } else {
        throw new Error("No Token Recived");
      }

        console.log(res);
    } catch (error) {
      setLoginError("Login failed");
      console.log(error);
    }
  };

  return (
    <LoginrightBoxStyled>
      <TopPartLoginRightBox />
      <ForgetPasswordFormStyled onSubmit={(e) => handleLogin(e)} >
      <MidPartLoginRightBox setEmail={(e)=> setEmail(e)} setPassword={(e)=> setPassword(e)}/>
      <BotPartLoginRightBox />
      </ForgetPasswordFormStyled>
    </LoginrightBoxStyled>
  );
}
