import styled from "styled-components";
import TopPartLoginRightBox from "../../Login/LoginRightPart/Components/TopPart";
import { LoginrightBoxStyled } from "../../Login/style/RightBox";
import MidPartResetPassowordRightBox from "./PasswordMidPart";
import BotPartResetPassowordRightBox from "./passwordBotPart";
import {ForgetPasswordFormStyled}from "../style/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import { AddEmail } from "../../../../store/slice/user";


export default function ForgetPasswordRightBox() {
  const [email, setEmailRegister] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const Addedemail = useSelector((state) => state.user.email);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoginError("");
    
    try {
      const res = await api.post("/auth/password-reset/", {
        email: email,
      });
      dispatch(AddEmail(email))
      console.log(Addedemail);
      navigate("/ForgetPasswordCode");
      
      
    } catch (error) {
      setLoginError("something went wrong");
      
      console.log(loginError);
      
      
    }
  };
//   
  // create props
  return (
    <LoginrightBoxStyled>
      <TopPartLoginRightBox />
      <ForgetPasswordFormStyled  onSubmit={(e) => handleRegister(e)}>
        <MidPartResetPassowordRightBox setEmail={(e)=>setEmailRegister(e)} />
        <BotPartResetPassowordRightBox />
      </ForgetPasswordFormStyled>
    </LoginrightBoxStyled>
  );
}
