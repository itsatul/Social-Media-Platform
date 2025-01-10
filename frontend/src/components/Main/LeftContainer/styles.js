import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #fff;

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  .postInput {
    width: 80%;
    height: 40px;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    margin-left: 10px;
    outline: none;
    display: flex;
    align-items: center;
  }

  input {
    width: 400px;
    height: 60px;
    outline: none;
    border: none;
    font-size: 18px;
  }

  .sendButton {
    background: linear-gradient(to right, purple, pink);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .sendButtonImg {
    width: 25px;
    height: 25px;
  }
`;

export const Main = styled.div`
  flex-grow: 1;
  padding-top: 100px;
  // margin-top: 2px;
  // margin: 20px;
  // padding-bottom: 40px;

  .topDiv {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 5%;
    margin-top: 40px;
    padding-left: 30px;
    gap: 20px;
  }

  .names {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;
  }

  .name {
    font-size: 16px;
    margin-top: 10px;
  }

  .postedTime {
    font-size: 14px;
    color: black;
  }

  .rightImg {
    display: flex;
    padding-left: 500px;
  }

  .downDiv {
    display: flex;
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
  }

  .pictures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;

    height: 60vh;
    gap: 20px;
    margin: 10px;
    padding: 10px;
  }

  .footer {
    position: sticky;
    padding-bottom: 20px;
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: space-between;
  }

  .leftFooter {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .rightFooter {
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
    font-size: 16px;
  }
`;
