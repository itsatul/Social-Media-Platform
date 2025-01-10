import { useNavigate } from "react-router-dom";
import { SignUpButtonWhiteStyled, TopPartRightBoxStyled } from "../../../../Login/style/RightBox";


export default function TopPartSignRightBox() {
const navigate=useNavigate();
  return (
    <TopPartRightBoxStyled>
      <a>Already Account?</a>
      <SignUpButtonWhiteStyled onClick={()=> navigate("/Login")}>SING IN</SignUpButtonWhiteStyled>
    </TopPartRightBoxStyled>
  );
}
