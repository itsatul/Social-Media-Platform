import {useDispatch} from "react-redux";
import styled from "styled-components";
import {LoginrightBoxStyled} from "../../../Login/style/RightBox";
import BotSignUpVerificationRightBox from "./BotPart";
import {ForgetPasswordFormStyled} from "../../../ForgetPasswordPage/style";
import MidPartVerificationRightBox from "./MIdPart";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {api} from "../../../../../config";

export default function SignUPVerificationRightBox() {
    const CodeSentDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.6rem;
    height: 80%;
    img {
      width: 4rem;
      height: 5rem;
    }
    p {
      opacity: 0.6;
      font-size: 0.9rem;
    }
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    h1 {
      font-size: 2.4rem;
      font-weight: lighter;
    }
  `;

    const [loginError, setLoginError] = useState("");
    const [UserName, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");

//   const email = useSelector((state) => state.user.email);
//   console.log(email);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoginError("");

        try {
            const res = await api.patch("/auth/registration/validation/", {
                email: Email,
                username: UserName,
                code: code,
                password: password,
                password_repeat: passwordRepeat,
                first_name: firstName,
                last_name: lastName,
            });
            //   dispatch(AddEmail(email));
            //   console.log(Addedemail);
            navigate("/Login");
        } catch (error) {
            setLoginError("something went wrong");
            console.log('bbbbb');
            console.log(loginError);
        }
    };

    return (
        <LoginrightBoxStyled>
            <ForgetPasswordFormStyled onSubmit={(e) => handleRegister(e)}>
                <MidPartVerificationRightBox

                    setEmail={(e) => setEmail(e)}
                    setUsername={(e) => setUsername(e)}
                    setCode={(e) => setCode(e)}
                    setPassword={(e) => setPassword(e)}
                    setPasswordRepeat={(e) => setPasswordRepeat(e)}
                    setFirstName={(e) => setFirstName(e)}
                    setLastName={(e) => setLastName(e)}

                />
                <BotSignUpVerificationRightBox/>
            </ForgetPasswordFormStyled>
        </LoginrightBoxStyled>
    );
}
