import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { Main } from "../components/Main/LeftContainer/styles";
import styled from "styled-components";

export default function HeaderLayout() {
    const Maindivstyled = styled.main`
        max-width: 100vw;
    `
    return (
        <>
                <Header />
                <Maindivstyled>
                <Outlet />
                </Maindivstyled>
                

        </>
    );
}
