import {useState} from "react";
import {ForgetPasswordFormStyled} from "../../../ForgetPasswordPage/style";
import {LoginrightBoxStyled} from "../../../Login/style/RightBox";
import BotPartSignUpRightBox from "./BotPart";
import MidPartSignUpRightBox from "./MIdPart";
import TopPartSignRightBox from "./TopPart";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../../../../config";
import {AddEmail} from "../../../../../store/slice/user";


export default function SignUpRightBox() {
    const [email, setEmailRegister] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Addedemail = useSelector((state) => state.user.email);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoginError("");

        try {
            const res = await api.post("/auth/registration/", {
                email: email,
            });
            dispatch(AddEmail(email))
            console.log(Addedemail);
            navigate("/SignUpCode");


        } catch (error) {
            setLoginError("something went wrong");

            console.log(loginError);


        }
    };
    // create props
    return (
        <LoginrightBoxStyled>
            <TopPartSignRightBox/>
            <ForgetPasswordFormStyled onSubmit={(e) => handleRegister(e)}>
                <MidPartSignUpRightBox setEmail={(e) => setEmailRegister(e)}/>
                <BotPartSignUpRightBox/>
            </ForgetPasswordFormStyled>

        </LoginrightBoxStyled>
    );
}
