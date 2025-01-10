import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import styled from "styled-components";

export default function HeaderLayout() {
    const Maindivstyled = styled.main`
        max-width: 100vw;
    `
    return (
        <>
            <Header/>
            <Maindivstyled>
                <Outlet/>
            </Maindivstyled>


        </>
    );
}
