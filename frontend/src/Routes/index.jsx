import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "../Pages/Friends/Friends";
import HeaderLayout from "../Layout";
import ForgotPassoword from "../Pages/LoginPage/ForgetPasswordPage/ForgetPassword";
import LoginPage from "../Pages/LoginPage/Login/Login";
import ForgotPassowordSentCodePage from "../Pages/LoginPage/ForgetPasswordPage/CodeSentPage/CodeSent";
import ResetPassoword from "../Pages/LoginPage/ForgetPasswordPage/ResetPasswordPage";
import Main from "../components/Main/Main";
import SignUp from "../Pages/LoginPage/SignUp/SingUpPage";
import SignUpSentCodePage from "../Pages/LoginPage/SignUp/CodeSignUpPage/CodeSent";
import SignUpVerificaitonPage from "../Pages/LoginPage/SignUp/VerificationSignUpPage";
import ProtectedElement from "../Layout/Proctected";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Login Page */}
                <Route path="/Login" element={<LoginPage/>}/>
                {/* REset Password Pages */}
                <Route path="/ForgetPassword" element={<ForgotPassoword/>}/>
                <Route
                    path="/ForgetPasswordCode"
                    element={<ForgotPassowordSentCodePage/>}
                />
                <Route
                    path="/ForgetPasswordReset"
                    element={<ResetPassoword/>}
                />

                {/* Sing UP pages */}
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/SignUpCode" element={<SignUpSentCodePage/>}/>
                <Route
                    path="/SignUpVerification"
                    element={<SignUpVerificaitonPage/>}
                />

                <Route element={<HeaderLayout/>}>
                    <Route element={<ProtectedElement/>}>
                        <Route path="/Main" element={<Main/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="*" element={<h1>NO Page</h1>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
