import styled from "styled-components";

export const MainContaier = styled.div`
  display: flex;
  // width: 100%;
  // height: 60px;

  // margin-top: 10px;
`;

export const LeftContainer = styled.div`
  display: flex;

  width: 40%;
  height: 100%;
  margin-left: 8%;
  align-items: center;
  gap: 15px;

  input {
    font-size: 18px;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  justify-content: end;
  margin-right: 6%;

  button {
    width: 10%;
    border: none;
    outline: none;
    color: black;
    background-color: transparent;
    font-size: 16px;
  }
`;
