import styled from "styled-components";
import {
  InputBoxButtonStyled,
  InputsBoxInputStyled,
  InputsBoxStyled,
  MidPartRightBoxStyled,
} from "../../../../Login/style/RightBox";
import { BigDivStyled, SmallDivStyled, TopDivStyled } from "../../../../Login/style/Login";

export default function MidPartVerificationRightBox({
  setEmail,
  setUsername,
  setCode,
  setPassword,
  setPasswordRepeat,
  setFirstName,
  setLastName,
}) {

  return (
    <MidPartRightBoxStyled>
      <h1>Verification</h1>
      <TopDivStyled>
        <InputsBoxStyled>
          <InputsBoxInputStyled
            type="text"
            placeholder="Validation Code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
          />
        </InputsBoxStyled>
      </TopDivStyled>
      <BigDivStyled>
        <SmallDivStyled>
          <h6>Email</h6>
          <InputsBoxStyled>
            <InputsBoxInputStyled
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputsBoxStyled>
          <InputsBoxStyled>
            <InputsBoxInputStyled
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputsBoxStyled>
          <InputsBoxStyled>
            <InputsBoxInputStyled
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputsBoxStyled>
        </SmallDivStyled>
        <SmallDivStyled>
          <h6>UserName</h6>
          <InputsBoxStyled>
            <InputsBoxInputStyled
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputsBoxStyled>
          <InputsBoxStyled>
            <InputsBoxInputStyled
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputsBoxStyled>
          <InputsBoxStyled>
            <InputsBoxInputStyled
              type="password"
              placeholder="Password Repeat"
              name="password"
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </InputsBoxStyled>
        </SmallDivStyled>
      </BigDivStyled>
    </MidPartRightBoxStyled>
  );
}
